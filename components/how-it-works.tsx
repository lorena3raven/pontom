import { ArrowDown, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const steps = [
  { n: '01', title: 'Escolha seus produtos', text: 'Explore a coleção e selecione seus favoritos.' },
  { n: '02', title: 'Fale conosco no WhatsApp', text: 'Atendimento rápido, discreto e personalizado.' },
  { n: '03', title: 'Receba em casa', text: 'Entrega com total discrição no mesmo dia.' },
]

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold">
            Simples e rápido
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight text-balance text-offwhite sm:text-5xl">
            Como Funciona
          </h2>
          <span className="mx-auto mt-6 block h-px w-24 gold-hairline" />
        </div>
      </Reveal>

      <div className="mt-16 flex flex-col items-stretch gap-6 lg:flex-row lg:items-center">
        {steps.map((step, i) => (
          <div key={step.n} className="flex flex-col items-stretch gap-6 lg:flex-1 lg:flex-row lg:items-center">
            <Reveal delay={i * 0.1} className="lg:flex-1">
              <div className="relative h-full rounded-2xl border border-border bg-card/40 p-8 text-center backdrop-blur-sm">
                <span className="font-display text-5xl font-extrabold text-gold/25">
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide text-offwhite">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.text}
                </p>
              </div>
            </Reveal>

            {i < steps.length - 1 && (
              <span className="mx-auto flex items-center justify-center text-gold/60">
                <ArrowDown className="h-6 w-6 lg:hidden" />
                <ArrowRight className="hidden h-6 w-6 lg:block" />
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
