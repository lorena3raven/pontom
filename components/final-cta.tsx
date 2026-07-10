import Image from 'next/image'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Reveal } from '@/components/reveal'

export function FinalCta() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden px-6 py-20 lg:flex lg:items-center lg:py-32">
      <Image
        src="/cta-bg.png"
        alt="Detalhe sofisticado em fundo escuro"
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/82 to-background/45" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(201,163,90,0.18),transparent_36%)]" />

      <Reveal className="relative z-10 mx-auto w-full max-w-[1240px]">
        <div className="max-w-3xl">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-gold sm:text-[0.7rem] sm:tracking-[0.42em]">
            Atendimento no WhatsApp
          </span>

          <h2 className="editorial-title mt-5 text-[3.7rem] leading-[0.9] text-offwhite sm:mt-6 sm:text-[6.4rem] lg:text-[8rem]">
            <span className="block">Descubra</span>
            <span className="block">Novidades</span>
          </h2>

          <p className="mt-6 max-w-[330px] text-[1rem] leading-7 text-muted-foreground sm:mt-8 sm:max-w-xl sm:text-lg sm:leading-8">
            Chame a Ponto M e receba um atendimento discreto, personalizado e
            rápido para escolher os produtos ideais.
          </p>

          <div className="mt-8 sm:mt-10">
            <div className="w-full max-w-[330px] sm:max-w-none">
              <WhatsAppButton
  size="xl"
  label="QUERO CONHECER"
  message="Oi, vim do Google e quero conhecer os produtos da Ponto M"
  className="h-12 w-full px-5 text-[0.8rem] sm:h-[68px] sm:w-auto sm:px-10 sm:text-base"
/>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}