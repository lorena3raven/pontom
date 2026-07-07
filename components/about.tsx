import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { WhatsAppButton } from '@/components/whatsapp-button'

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-[1240px] px-6 py-24 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] border border-gold/15">
              <Image
                src="/packaging.png"
                alt="Embalagem discreta e sofisticada da Ponto M"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-2xl border border-gold/30 sm:block" />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div>
            <span className="text-[0.7rem] uppercase tracking-[0.4em] text-gold">
              Sobre nós
            </span>
            <h2 className="mt-4 font-display text-4xl font-extrabold uppercase leading-tight tracking-tight text-balance text-offwhite sm:text-5xl">
              Conheça a Ponto M
            </h2>
            <span className="mt-6 block h-px w-24 gold-hairline" />

            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A Ponto M Moda Íntima oferece lingeries, fantasias, cosméticos
              sensuais, vibradores e acessórios com total discrição.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nosso atendimento foi pensado para proporcionar conforto,
              privacidade e confiança em cada compra.
            </p>

            <div className="mt-9">
              <WhatsAppButton size="lg" label="FALAR NO WHATSAPP" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
