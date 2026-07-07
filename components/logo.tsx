import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  showWordmark?: boolean
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/60">
        <span className="absolute inset-[3px] rounded-full border border-gold/25" />
        <span className="font-display text-xl font-extrabold leading-none text-gold">
          M
        </span>
      </span>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-extrabold uppercase tracking-[0.18em] text-offwhite">
            Ponto M
          </span>
          <span className="mt-1 text-[0.6rem] uppercase tracking-[0.42em] text-gold/80">
            Moda Íntima
          </span>
        </span>
      )}
    </div>
  )
}
