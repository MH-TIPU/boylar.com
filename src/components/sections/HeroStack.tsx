import { ServiceIcon } from '@/components/ui/ServiceIcon'

/**
 * The hero visual: the six disciplines drawn as one connected stack rather
 * than six separate offerings. A spine runs through every tile and a pulse
 * travels down it, which is the whole argument of the page in one image.
 *
 * Pure CSS and SVG — no imagery to source, and it restyles with the tokens.
 */

const DISCIPLINES = [
  { icon: 'code-2', label: 'Software & apps', note: 'build' },
  { icon: 'server', label: 'Infrastructure', note: 'run' },
  { icon: 'palette', label: 'Design & brand', note: 'shape' },
  { icon: 'megaphone', label: 'Digital & content', note: 'grow' },
  { icon: 'shopping-cart', label: 'E-commerce & ERP', note: 'sell' },
  { icon: 'shield-check', label: 'Managed IT', note: 'protect' },
]

export function HeroStack() {
  return (
    <div className="relative">
      {/* Glow sits behind the panel, not inside it, so the border stays crisp */}
      <div
        aria-hidden
        className="absolute -inset-10 rounded-full bg-accent/12 blur-3xl"
      />

      <div className="border-gradient relative rounded-panel p-1.5 shadow-[0_24px_80px_-32px_rgba(83,74,183,0.7)]">
        <div className="rounded-[calc(var(--radius-panel)-0.375rem)] border border-line bg-canvas/80 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5">
            <span className="flex items-center gap-1.5" aria-hidden>
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
              <span className="size-2 rounded-full bg-line-strong" />
            </span>
            <span className="font-mono text-[0.6875rem] tracking-widest text-fg-subtle uppercase">
              one team · one contract
            </span>
          </div>

          <ul className="relative flex flex-col gap-1 p-4">
            {/* The spine, and the pulse that runs down it */}
            <span
              aria-hidden
              className="absolute top-6 bottom-6 left-[2.625rem] w-px overflow-hidden bg-line"
            >
              <span className="animate-spine block h-8 w-px bg-gradient-to-b from-transparent via-accent to-transparent" />
            </span>

            {DISCIPLINES.map((item, i) => (
              <li
                key={item.label}
                className="animate-in relative flex items-center gap-4 rounded-xl px-2 py-2.5 transition-colors hover:bg-elevated/60"
                style={{ animationDelay: `${300 + i * 90}ms` }}
              >
                <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-elevated text-accent">
                  <ServiceIcon name={item.icon} className="size-4" />
                </span>
                <span className="flex-1 text-sm font-medium">{item.label}</span>
                <span className="font-mono text-[0.6875rem] tracking-wide text-fg-subtle">
                  {item.note}
                </span>
              </li>
            ))}
          </ul>

          <p className="border-t border-line px-5 py-3.5 text-xs text-fg-subtle">
            Engage one discipline or all six. Same team either way.
          </p>
        </div>
      </div>
    </div>
  )
}
