import { MessageCircle } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa'
import { site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/10 bg-background px-6 py-10">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold">
            Ponto M
          </p>

          <p className="mt-2 text-sm text-muted-foreground">
            Moda Íntima © Todos os direitos reservados.
          </p>
        </div>

        <div className="flex justify-center gap-3">
          {/* Instagram */}
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:scale-105"
          >
            <FaInstagram className="h-5 w-5" />
          </a>

          {/* WhatsApp */}
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 text-gold transition-all duration-300 hover:bg-gold hover:text-primary-foreground hover:scale-105"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}