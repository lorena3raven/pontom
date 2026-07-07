import { Sparkles, Zap, Lock, ShieldCheck, HeartHandshake } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const items = [
  { icon: Sparkles, title: 'Produtos selecionados', text: 'Curadoria premium em cada peça da coleção.' },
  { icon: Zap, title: 'Entrega rápida', text: 'Receba no mesmo dia em toda Guarulhos.' },
  { icon: Lock, title: 'Privacidade garantida', text: 'Embalagem neutra, sem qualquer identificação.' },
  { icon: ShieldCheck, title: 'Compra segura', text: 'Atendimento confiável do começo ao fim.' },
  { icon: HeartHandshake, title: 'Atendimento humanizado', text: 'Suporte próximo, discreto e sem julgamentos.' },
]

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden border-y border-border bg-coffee/20 py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[130px]" />
      <div className="relative mx-auto max-w-[1240px] px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold">
              Por que a Ponto M
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight text-balance text-offwhite sm:text-5xl">
              Nossos Diferenciais
            </h2>
            <span className="mx-auto mt-6 block h-px w-24 gold-hairline" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.07}>
              <div className="group h-full rounded-2xl border border-border bg-card/50 p-7 backdrop-blur-sm transition-colors hover:border-gold/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/25 bg-gold/5 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-offwhite">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
