# boylar brand kit

Everything needed to use the boylar logo across web, print, social, and apps.

## Folders

### `logo/` — master vector files (SVG)
Scale to any size without quality loss. This is what a designer or printer asks for.

- `boylar-mark.svg` — purple tile, white `b`
- `boylar-mark-inverted.svg` — white tile, purple `b`
- `boylar-mark-black.svg` / `boylar-mark-white.svg` — single-colour knockouts
- `boylar-wordmark.svg` / `-black` / `-white`
- `boylar-lockup-horizontal.svg` / `-black` / `-white`
- `boylar-lockup-stacked.svg` / `-black` / `-white`

### `web/` — drop straight into the site root
- `favicon.ico` (16/32/48 in one file), `favicon.svg`, `favicon-16.png`, `favicon-32.png`
- `apple-touch-icon.png` (180), `android-chrome-192.png`, `android-chrome-512.png`
- `site.webmanifest`
- `head-snippet.html` — the tags to paste into `<head>`
- `brand-colors.css` — the palette as CSS variables

### `png/` — raster exports
Mark at 16, 32, 48, 64, 128, 180, 192, 256, 512, 1024 px. Lockups and wordmark at 400, 800, 1600 px wide. All transparent background.

### `social/`
- `og-image-1200x630.png` — link preview card for Facebook, LinkedIn, WhatsApp
- `profile-1000.png` — profile picture for any platform
- `email-signature-320w.png`

### `print/` — vector PDF
Send these to printers for business cards, banners, signage, stamps.

### `illustrator/` — `.ai` files
These are PDF-format files with an `.ai` extension. Illustrator opens them and they stay fully editable. This is worth knowing: since version 9, `.ai` has been a PDF container, which is why the swap works. If a designer objects, give them the SVG from `logo/` instead — Illustrator opens that natively too, and it is the cleaner source.

### `fonts/`
Poppins Bold, SemiBold, Medium, plus the licence. Install these to match the logo in documents and slides.

## Regenerating everything

`generate_brand_assets.py` in the parent folder rebuilds every file above from the values in its CONFIG block.

```bash
pip install fonttools cairosvg pillow
python3 generate_brand_assets.py
```

Change the purple, the corner radius, the letter, or the font at the top of the script and re-run. Every SVG, PNG, ICO, and PDF updates together, so nothing drifts out of sync.

## First steps

1. Upload the contents of `web/` to the root of boylar.com.
2. Paste `web/head-snippet.html` into the `<head>` of the site, editing the paths if the files are not at the root.
3. Set `social/profile-1000.png` as the profile picture on Facebook, LinkedIn, and any other account.
4. Send `print/boylar-lockup-horizontal.pdf` to the printer for business cards.
