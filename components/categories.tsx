import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { site } from '@/lib/site'

const categories = [
  {
    name: 'Lingeries',
    desc: 'Renda, cetim e peças para valorizar cada detalhe.',
    img: '/cat-lingeries.png',
    message: 'Oi, vim do Google e quero conhecer seus produtos de lingeries.',
  },
  {
    name: 'Sensuais',
    desc: 'Óleos, géis e produtos essenciais para novas sensações.',
    img: '/cat-cosmeticos.png',
    message: 'Oi, vim do Google e quero conhecer seus produtos sensuais.',
  },
  {
    name: 'Vibradores',
    desc: 'Bem-estar íntimo com curadoria e total discrição.',
    img: '/cat-vibradores.png',
    message: 'Oi, vim do Google e quero conhecer seus vibradores.',
  },
  {
    name: 'Fantasias',
    desc: 'Produções marcantes para momentos especiais.',
    img: '/cat-fantasias.png',
    message: 'Oi, vim do Google e quero conhecer suas fantasias.',
  },
]

export function Categories() {
  return (
    <section id="categorias" className="mx-auto max-w-[1240px] px-6 py-20 lg:py-28">
      <Reveal>
        <div className="max-w-3xl">
          <span className="text-[0.7rem] font-semibold uppercase tracking-[0.42em] text-gold">
            Coleção Ponto M
          </span>
          <h2 className="editorial-title mt-5 text-[3.8rem] text-offwhite sm:text-[5.4rem] lg:text-[6.2rem]">
            Escolha seu momento
          </h2>
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {categories.map((cat, i) => (
          <Reveal key={cat.name} delay={i * 0.05}>
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent(cat.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex min-h-[390px] overflow-hidden rounded-[2rem] border border-gold/12 bg-card"
            >
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

              <div className="relative mt-auto flex w-full items-end justify-between gap-5 p-7 sm:p-9">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.36em] text-gold/90">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="editorial-title mt-3 text-[3.4rem] text-offwhite sm:text-[4.6rem]">
                    {cat.name}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-muted-foreground sm:text-base">
                    {cat.desc}
                  </p>
                </div>

                <span className="mb-2 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground">
                  <ArrowUpRight className="h-6 w-6" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}