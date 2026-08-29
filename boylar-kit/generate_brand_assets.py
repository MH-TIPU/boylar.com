#!/usr/bin/env python3
"""
boylar brand asset generator
============================

Regenerates every logo file from a single source of truth: the values in the
CONFIG block below plus the Poppins font files in ./fonts.

Change the purple, the corner radius, the wordmark text or the font, re-run,
and every SVG / PNG / ICO / PDF is rebuilt consistently.

Usage:
    pip install fonttools cairosvg pillow
    python3 generate_brand_assets.py

Requires ./fonts/Poppins-Medium.ttf and ./fonts/Poppins-Bold.ttf
(SIL Open Font License, free for commercial use).
"""

import os
import shutil

import cairosvg
from PIL import Image
from fontTools.misc.transform import Transform
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont

# ----------------------------------------------------------------------------
# CONFIG
# ----------------------------------------------------------------------------

BRAND = "boylar"
DOMAIN = "boylar.com"

PURPLE = "#534AB7"          # primary brand purple
PURPLE_DEEP = "#3C3489"     # for text on light purple tints
PURPLE_LIGHT = "#7F77DD"    # accent
PURPLE_TINT = "#EEEDFE"     # background tint
BLACK = "#111111"
WHITE = "#FFFFFF"

MARK_FONT = "fonts/Poppins-Medium.ttf"   # letter inside the tile
WORD_FONT = "fonts/Poppins-Bold.ttf"     # wordmark

MARK_LETTER = "b"
TILE = 512                   # master tile size in px
CORNER_RATIO = 0.225         # corner radius as a fraction of the tile
LETTER_HEIGHT_RATIO = 0.56   # letter height as a fraction of the tile
WORD_TRACKING = -0.02        # letter-spacing as a fraction of font size

OUT = "boylar-brand"

# ----------------------------------------------------------------------------
# Font outline helpers
# ----------------------------------------------------------------------------


def text_outline(font_path, text, font_size, tracking=0.0):
    """Return (path_d, bbox) for `text` as SVG path data.

    Baseline sits at y=0, text starts at x=0, y grows downward.
    bbox is (xmin, ymin, xmax, ymax) in the same space.
    """
    font = TTFont(font_path)
    upem = font["head"].unitsPerEm
    glyphs = font.getGlyphSet()
    cmap = font.getBestCmap()
    scale = font_size / upem
    spacing = font_size * tracking

    svg_pen = SVGPathPen(glyphs)
    bounds_pen = BoundsPen(glyphs)
    pen_x = 0.0

    for ch in text:
        name = cmap[ord(ch)]
        t = Transform(scale, 0, 0, -scale, pen_x, 0)
        glyphs[name].draw(TransformPen(svg_pen, t))
        glyphs[name].draw(TransformPen(bounds_pen, t))
        pen_x += glyphs[name].width * scale + spacing

    font.close()
    return svg_pen.getCommands(), bounds_pen.bounds


def rounded_rect_path(x, y, w, h, r):
    """Rounded rectangle as SVG path data, drawn clockwise."""
    return (
        f"M{x + r},{y} H{x + w - r} A{r},{r} 0 0 1 {x + w},{y + r} "
        f"V{y + h - r} A{r},{r} 0 0 1 {x + w - r},{y + h} "
        f"H{x + r} A{r},{r} 0 0 1 {x},{y + h - r} "
        f"V{y + r} A{r},{r} 0 0 1 {x + r},{y} Z"
    )


def reverse_path_direction_hint(d):
    """The letter path is drawn in the font's own winding direction.

    Combined with fill-rule="evenodd" on the tile this knocks the letter out
    of the tile regardless of winding, which is what the mono marks rely on.
    """
    return d


def svg_doc(width, height, body, title):
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" '
        f'viewBox="0 0 {width} {height}" role="img" aria-label="{title}">\n'
        f"  <title>{title}</title>\n{body}</svg>\n"
    )


# ----------------------------------------------------------------------------
# Mark geometry
# ----------------------------------------------------------------------------


def mark_parts(tile=TILE):
    """Return (tile_path, letter_path) for the app mark at the given size."""
    radius = tile * CORNER_RATIO
    target_h = tile * LETTER_HEIGHT_RATIO

    probe_size = 100.0
    _, b = text_outline(MARK_FONT, MARK_LETTER, probe_size)
    probe_h = b[3] - b[1]
    font_size = probe_size * target_h / probe_h

    d, b = text_outline(MARK_FONT, MARK_LETTER, font_size)
    glyph_w = b[2] - b[0]
    glyph_h = b[3] - b[1]
    dx = (tile - glyph_w) / 2 - b[0]
    dy = (tile - glyph_h) / 2 - b[1]

    tile_path = rounded_rect_path(0, 0, tile, tile, radius)
    letter = f'<g transform="translate({dx:.2f},{dy:.2f})"><path d="{d}"/></g>'
    return tile_path, letter, d, (dx, dy)


def build_mark_svgs():
    tile_path, letter_g, letter_d, (dx, dy) = mark_parts()

    # Full colour: purple tile, white letter
    body = (
        f'  <path d="{tile_path}" fill="{PURPLE}"/>\n'
        f'  <g fill="{WHITE}" transform="translate({dx:.2f},{dy:.2f})">'
        f'<path d="{letter_d}"/></g>\n'
    )
    write(f"{OUT}/logo/boylar-mark.svg", svg_doc(TILE, TILE, body, f"{BRAND} mark"))

    # Inverted: white tile, purple letter (for use on photos / dark purple)
    body = (
        f'  <path d="{tile_path}" fill="{WHITE}"/>\n'
        f'  <g fill="{PURPLE}" transform="translate({dx:.2f},{dy:.2f})">'
        f'<path d="{letter_d}"/></g>\n'
    )
    write(f"{OUT}/logo/boylar-mark-inverted.svg", svg_doc(TILE, TILE, body, f"{BRAND} mark inverted"))

    # Single colour knockouts, for print, embroidery, stamps, faxes
    for name, colour in (("black", BLACK), ("white", WHITE)):
        body = (
            f'  <path fill-rule="evenodd" fill="{colour}" '
            f'd="{tile_path} M{dx:.2f},{dy:.2f} m0,0 Z"/>\n'
        )
        # combine tile + translated letter into one evenodd path
        translated = translate_path(letter_d, dx, dy)
        body = (
            f'  <path fill-rule="evenodd" fill="{colour}" d="{tile_path} {translated}"/>\n'
        )
        write(f"{OUT}/logo/boylar-mark-{name}.svg", svg_doc(TILE, TILE, body, f"{BRAND} mark {name}"))


def translate_path(d, dx, dy):
    """Translate an SVG path by wrapping absolute coordinates.

    SVGPathPen emits absolute commands only, so a numeric shift is safe.
    """
    out = []
    i = 0
    tokens = []
    num = ""
    for ch in d:
        if ch.isalpha():
            if num:
                tokens.append(num)
                num = ""
            tokens.append(ch)
        elif ch in " ,":
            if num:
                tokens.append(num)
                num = ""
        else:
            num += ch
    if num:
        tokens.append(num)

    cmd = None
    coord_index = 0
    for tok in tokens:
        if tok.isalpha():
            cmd = tok
            coord_index = 0
            out.append(tok)
        else:
            val = float(tok)
            if cmd in ("M", "L", "C", "S", "Q", "T"):
                val += dx if coord_index % 2 == 0 else dy
            elif cmd == "H":
                val += dx
            elif cmd == "V":
                val += dy
            out.append(f"{val:.2f}")
            coord_index += 1
    return " ".join(out)


# ----------------------------------------------------------------------------
# Wordmark and lockups
# ----------------------------------------------------------------------------

WORD_SIZE = 200.0
PAD = 8.0


def wordmark_geometry():
    d, b = text_outline(WORD_FONT, BRAND, WORD_SIZE, WORD_TRACKING)
    w = b[2] - b[0]
    h = b[3] - b[1]
    return d, b, w, h


def build_wordmark_svgs():
    d, b, w, h = wordmark_geometry()
    shifted = translate_path(d, -b[0] + PAD, -b[1] + PAD)
    W, H = w + PAD * 2, h + PAD * 2
    for name, colour in (("", PURPLE), ("-black", BLACK), ("-white", WHITE)):
        body = f'  <path d="{shifted}" fill="{colour}"/>\n'
        write(
            f"{OUT}/logo/boylar-wordmark{name}.svg",
            svg_doc(round(W, 2), round(H, 2), body, f"{BRAND} wordmark"),
        )


def build_lockups():
    d, b, w, h = wordmark_geometry()
    tile = h * 2.05                       # tile a little taller than the x-to-ascender run
    gap = tile * 0.34
    radius = tile * CORNER_RATIO

    tp, lg, letter_d, _ = mark_parts(tile)
    # recompute letter placement at this tile size
    probe = 100.0
    _, pb = text_outline(MARK_FONT, MARK_LETTER, probe)
    fs = probe * (tile * LETTER_HEIGHT_RATIO) / (pb[3] - pb[1])
    ld, lb = text_outline(MARK_FONT, MARK_LETTER, fs)
    ldx = (tile - (lb[2] - lb[0])) / 2 - lb[0]
    ldy = (tile - (lb[3] - lb[1])) / 2 - lb[1]

    # --- horizontal ---
    W = PAD * 2 + tile + gap + w
    H = PAD * 2 + tile
    word_dx = PAD + tile + gap - b[0]
    word_dy = PAD + (tile - h) / 2 - b[1]
    word_shifted = translate_path(d, word_dx, word_dy)
    tile_path = rounded_rect_path(PAD, PAD, tile, tile, radius)
    letter_shifted = translate_path(ld, PAD + ldx, PAD + ldy)

    variants = {
        "": (PURPLE, WHITE, PURPLE),
        "-black": (BLACK, WHITE, BLACK),
        "-white": (WHITE, PURPLE, WHITE),
    }
    for name, (tile_c, letter_c, word_c) in variants.items():
        body = (
            f'  <path d="{tile_path}" fill="{tile_c}"/>\n'
            f'  <path d="{letter_shifted}" fill="{letter_c}"/>\n'
            f'  <path d="{word_shifted}" fill="{word_c}"/>\n'
        )
        write(
            f"{OUT}/logo/boylar-lockup-horizontal{name}.svg",
            svg_doc(round(W, 2), round(H, 2), body, f"{BRAND} horizontal lockup"),
        )

    # --- stacked ---
    vgap = tile * 0.28
    Ws = PAD * 2 + max(tile, w)
    Hs = PAD * 2 + tile + vgap + h
    tx = PAD + (max(tile, w) - tile) / 2
    tile_path = rounded_rect_path(tx, PAD, tile, tile, radius)
    letter_shifted = translate_path(ld, tx + ldx, PAD + ldy)
    wx = PAD + (max(tile, w) - w) / 2 - b[0]
    wy = PAD + tile + vgap - b[1]
    word_shifted = translate_path(d, wx, wy)

    for name, (tile_c, letter_c, word_c) in variants.items():
        body = (
            f'  <path d="{tile_path}" fill="{tile_c}"/>\n'
            f'  <path d="{letter_shifted}" fill="{letter_c}"/>\n'
            f'  <path d="{word_shifted}" fill="{word_c}"/>\n'
        )
        write(
            f"{OUT}/logo/boylar-lockup-stacked{name}.svg",
            svg_doc(round(Ws, 2), round(Hs, 2), body, f"{BRAND} stacked lockup"),
        )


# ----------------------------------------------------------------------------
# Raster and print exports
# ----------------------------------------------------------------------------

FAVICON_SIZES = [16, 32, 48]
MARK_PNG_SIZES = [16, 32, 48, 64, 128, 180, 192, 256, 512, 1024]


def build_pngs():
    src = f"{OUT}/logo/boylar-mark.svg"
    for s in MARK_PNG_SIZES:
        cairosvg.svg2png(url=src, write_to=f"{OUT}/png/boylar-mark-{s}.png",
                         output_width=s, output_height=s)

    for name in ("boylar-lockup-horizontal", "boylar-lockup-horizontal-white",
                 "boylar-lockup-stacked", "boylar-wordmark", "boylar-wordmark-white"):
        for width in (400, 800, 1600):
            cairosvg.svg2png(url=f"{OUT}/logo/{name}.svg",
                             write_to=f"{OUT}/png/{name}-{width}w.png",
                             output_width=width)

    # web icon set
    cairosvg.svg2png(url=src, write_to=f"{OUT}/web/favicon-16.png", output_width=16, output_height=16)
    cairosvg.svg2png(url=src, write_to=f"{OUT}/web/favicon-32.png", output_width=32, output_height=32)
    cairosvg.svg2png(url=src, write_to=f"{OUT}/web/apple-touch-icon.png", output_width=180, output_height=180)
    cairosvg.svg2png(url=src, write_to=f"{OUT}/web/android-chrome-192.png", output_width=192, output_height=192)
    cairosvg.svg2png(url=src, write_to=f"{OUT}/web/android-chrome-512.png", output_width=512, output_height=512)
    shutil.copy(src, f"{OUT}/web/favicon.svg")


def build_favicon_ico():
    imgs = []
    for s in FAVICON_SIZES:
        path = f"{OUT}/png/boylar-mark-{s}.png"
        imgs.append(Image.open(path).convert("RGBA"))
    imgs[0].save(f"{OUT}/web/favicon.ico", format="ICO",
                 sizes=[(s, s) for s in FAVICON_SIZES])


def build_social():
    # Open Graph card, 1200x630, white lockup on purple
    lock = f"{OUT}/logo/boylar-lockup-horizontal-white.svg"
    cairosvg.svg2png(url=lock, write_to="/tmp/_lock.png", output_width=620)
    lock_img = Image.open("/tmp/_lock.png").convert("RGBA")
    card = Image.new("RGBA", (1200, 630), PURPLE)
    card.alpha_composite(lock_img, ((1200 - lock_img.width) // 2,
                                    (630 - lock_img.height) // 2))
    card.convert("RGB").save(f"{OUT}/social/og-image-1200x630.png")

    # Square profile picture, 1000x1000
    cairosvg.svg2png(url=f"{OUT}/logo/boylar-mark.svg",
                     write_to=f"{OUT}/social/profile-1000.png",
                     output_width=1000, output_height=1000)

    # Email signature / small header strip
    cairosvg.svg2png(url=f"{OUT}/logo/boylar-lockup-horizontal.svg",
                     write_to=f"{OUT}/social/email-signature-320w.png",
                     output_width=320)


def build_vector_print():
    for name in ("boylar-mark", "boylar-lockup-horizontal",
                 "boylar-lockup-stacked", "boylar-wordmark"):
        cairosvg.svg2pdf(url=f"{OUT}/logo/{name}.svg",
                         write_to=f"{OUT}/print/{name}.pdf")


# ----------------------------------------------------------------------------
# Supporting files
# ----------------------------------------------------------------------------


def build_web_snippets():
    manifest = f"""{{
  "name": "{BRAND}",
  "short_name": "{BRAND}",
  "icons": [
    {{ "src": "/android-chrome-192.png", "sizes": "192x192", "type": "image/png" }},
    {{ "src": "/android-chrome-512.png", "sizes": "512x512", "type": "image/png" }}
  ],
  "theme_color": "{PURPLE}",
  "background_color": "{WHITE}",
  "display": "standalone"
}}
"""
    write(f"{OUT}/web/site.webmanifest", manifest)

    html = f"""<!-- Paste inside <head> of every page on {DOMAIN} -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="{PURPLE}">

<meta property="og:title" content="{BRAND}">
<meta property="og:image" content="https://{DOMAIN}/og-image-1200x630.png">
<meta name="twitter:card" content="summary_large_image">
"""
    write(f"{OUT}/web/head-snippet.html", html)

    css = f""":root {{
  --brand-purple: {PURPLE};
  --brand-purple-deep: {PURPLE_DEEP};
  --brand-purple-light: {PURPLE_LIGHT};
  --brand-purple-tint: {PURPLE_TINT};
  --brand-black: {BLACK};
}}
"""
    write(f"{OUT}/web/brand-colors.css", css)


def write(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as f:
        f.write(content)


def main():
    if os.path.isdir(OUT):
        shutil.rmtree(OUT)
    for sub in ("logo", "png", "web", "social", "print", "fonts"):
        os.makedirs(f"{OUT}/{sub}", exist_ok=True)

    build_mark_svgs()
    build_wordmark_svgs()
    build_lockups()
    build_pngs()
    build_favicon_ico()
    build_social()
    build_vector_print()
    build_web_snippets()

    for f in os.listdir("fonts"):
        shutil.copy(f"fonts/{f}", f"{OUT}/fonts/{f}")

    print("done")


if __name__ == "__main__":
    main()
