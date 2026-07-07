import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/10 bg-background px-6 py-3 lg:py-4">
      <div className="mx-auto max-w-[1240px]">

        {/* Parte superior */}
        <div className="flex flex-col items-center justify-between gap-1 md:flex-row">

          {/* Logo */}
          <div className="text-center md:text-left">
            <Image
              src="/logo.png"
              alt="Ponto M Moda Íntima"
              width={200}
              height={110}
              className="mx-auto h-auto w-[140px] md:mx-0 md:w-[170px]"
            />
          </div>

          {/* Redes sociais */}
          <div className="flex gap-2">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-primary-foreground"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-300 hover:scale-105 hover:bg-gold hover:text-primary-foreground"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>

        </div>

        {/* Barra inferior */}
        <div className="mt-3 border-t border-gold/10 pt-5">
          <div className="flex flex-col items-center justify-between gap-1 text-sm text-muted-foreground md:flex-row">

           <p>
  © {new Date().getFullYear()} Ponto M Moda Íntima.
  <br className="md:hidden" />
  <span className="md:ml-1">
    Todos os direitos reservados.
  </span>
</p>
            

            <a
              href="https://www.instagram.com/design.lorena/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 transition-opacity hover:opacity-100"
            >
              <span className="text-sm text-champagne/70">
                Desenvolvido por
              </span>

              <Image
                src="/lorena-logo.png"
                alt="Lorena Design"
                width={90}
                height={28}
                className="h-auto w-[90px] opacity-80 transition-all duration-300 group-hover:opacity-100"
              />
            </a>

          </div>
        </div>

      </div>
    </footer>
  )
}