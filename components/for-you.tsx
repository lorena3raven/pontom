import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const cards = [
  {
    img: '/cat-lingeries.png',
    title: 'Quer se sentir mais confiante',
    text: 'Peças que valorizam seu corpo e despertam sua autoestima todos os dias.',
  },
  {
    img: '/cat-cosmeticos.png',
    title: 'Quer apimentar a relação',
    text: 'Cosméticos e acessórios para transformar a rotina em algo inesquecível.',
  },
  {
    img: '/cat-acessorios.png',
    title: 'Quer comprar sem constrangimento',
    text: 'Atendimento discreto no WhatsApp e entrega em embalagem 100% neutra.',
  },
]

export function ForYou() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold">
            Feito pra você
          </span>
          <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-[1.02] tracking-tight text-balance text-offwhite sm:text-5xl">
            Esse lugar é pra você que<span className="text-gold">:</span>
          </h2>
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.1}>
            <div className="group h-full overflow-hidden rounded-[1.5rem] border border-border bg-card/50 transition-colors hover:border-gold/40">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-wide text-offwhite">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
