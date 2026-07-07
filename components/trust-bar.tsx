import { Clock, Lock, MapPin, MessageCircle } from 'lucide-react'

const items = [
  { icon: Clock, title: 'Entrega no mesmo dia', text: 'Guarulhos e região' },
  { icon: Lock, title: 'Embalagem discreta', text: 'Sem identificação' },
  { icon: MessageCircle, title: 'Atendimento reservado', text: 'Direto no WhatsApp' },
  { icon: MapPin, title: 'Sex Shop em Guarulhos', text: 'Compra rápida e segura' },
]

export function TrustBar() {
  return (
    <section className="border-y border-gold/10 bg-black/25">
      <div className="mx-auto grid max-w-[1240px] gap-px px-6 py-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-4 px-2 py-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-gold/8 text-gold">
              <item.icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.12em] text-offwhite">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
