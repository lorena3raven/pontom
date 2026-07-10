'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { WhatsAppButton } from '@/components/whatsapp-button'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section id="top" className="soft-vignette relative min-h-screen overflow-hidden">
      {/* gradiente desktop */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 hidden h-full w-[78%] bg-gradient-to-r from-background from-[0%] via-background/95 via-[58%] to-transparent to-[100%] lg:block" />

      {/* gradiente mobile */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-background/90 via-background/82 to-background/96 lg:hidden" />

      <div className="relative z-30 mx-auto grid min-h-screen max-w-[1280px] items-center px-6 pt-0 pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:pt-2 lg:pb-14">
        <div className="mx-auto max-w-[620px] text-center lg:mx-0 lg:text-left">
          <motion.div
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease }}
  className="mx-auto mb-1 w-fit lg:mx-0 lg:mb-1"
>
  <Image
    src="/logo.png"
    alt="Ponto M Moda Íntima"
    width={220}
    height={110}
    priority
    className="h-auto w-[175px] sm:w-[190px] lg:w-[240px]"
  />
</motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease }}
            className="editorial-title mx-auto max-w-[410px] text-[4.35rem] leading-[0.88] tracking-[-0.03em] text-offwhite sm:max-w-[520px] sm:text-[4.8rem] lg:mx-0 lg:max-w-[780px] lg:text-[6.4rem] xl:text-[7rem]"
          >
            <span className="block">Seu prazer.</span>
            <span className="mt-1 block text-[1.08em] text-gold">
              Sua escolha
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mx-auto mt-5 max-w-[340px] text-[1rem] font-medium leading-6 text-champagne/85 sm:max-w-[480px] sm:text-lg sm:leading-7 lg:mx-0 lg:mt-4"
          >
            Descubra lingeries, cosméticos sensuais, vibradores e acessórios com
            atendimento discreto e entrega no mesmo dia em Guarulhos e região.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className="mt-9 flex flex-col items-center gap-4 lg:mt-10 lg:items-start"
          >
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none">
              <WhatsAppButton
  size="xl"
  label="QUERO CONHECER AGORA"
  message="Oi, vim do Google e quero conhecer os produtos da Ponto M"
  className="h-12 w-full px-5 text-[0.72rem] sm:text-[0.9rem] lg:h-[68px] lg:w-auto lg:min-w-[350px] lg:px-10 lg:text-base"
/>
            </div>

            <p className="max-w-[300px] text-center text-[0.64rem] font-medium uppercase leading-5 tracking-[0.28em] text-champagne/65 lg:max-w-none lg:text-left lg:text-xs">
              Embalagem neutra • Compra reservada
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 50, scale: 1.03 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.1, ease }}
        className="pointer-events-none absolute inset-0 z-10 lg:inset-y-0 lg:left-auto lg:right-0 lg:w-[55vw]"
      >
        <div className="absolute right-[8%] top-[18%] hidden h-[520px] w-[520px] rounded-full border border-gold/18 lg:block" />
        <div className="absolute right-[2%] top-[8%] hidden h-[680px] w-[680px] rounded-full bg-gold/10 blur-[90px] lg:block" />

        <Image
          src="/hero-model.png"
          alt="Modelo em lingerie sofisticada"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="
object-cover
object-[72%_center]
scale-[1.15]
opacity-55
lg:scale-100
lg:opacity-100
lg:object-center
"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/40 lg:bg-gradient-to-r lg:from-background/20 lg:via-transparent lg:to-transparent" />
      </motion.div>
    </section>
  )
}