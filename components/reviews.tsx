import { Star } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

const reviews = [
  {
    name: 'Amanda R.',
    text: 'Atendimento discreto, rápido e muito cuidadoso. A embalagem chegou neutra e os produtos são lindos.',
  },
  {
    name: 'Juliana M.',
    text: 'Recebi no mesmo dia em Guarulhos. Me senti super confortável no atendimento pelo WhatsApp.',
  },
  {
    name: 'Patrícia L.',
    text: 'Loja de confiança, atendimento humanizado e total privacidade. Recomendo demais.',
  },
]

function Stars() {
  return (
    <div className="flex gap-1" aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-gold text-gold" />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="avaliacoes" className="border-y border-gold/10 bg-card/35 px-6 py-20 lg:py-28">
      <div className="mx-auto max-w-[1240px]">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-gold">
                Avaliações
              </span>
              <h2 className="editorial-title mt-5 text-[3.7rem] text-offwhite sm:text-[5.2rem] lg:text-[6rem]">
                Clientes satisfeitas
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-muted-foreground lg:justify-self-end">
              A experiência da Ponto M é pensada para ser confortável, segura e totalmente reservada do primeiro contato até a entrega.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={i * 0.08}>
              <figure className="flex min-h-[230px] flex-col justify-between rounded-[1.6rem] border border-gold/14 bg-background/70 p-7 shadow-[0_24px_80px_-60px_rgba(201,163,90,0.8)]">
                <Stars />
                <blockquote className="mt-6 text-sm leading-7 text-muted-foreground">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-offwhite">
                  {review.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex justify-center">
            <a
              href={site.reviews}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold/35 px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
            >
              Ver avaliações no Google
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
