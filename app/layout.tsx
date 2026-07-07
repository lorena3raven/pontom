import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { Sora } from 'next/font/google'
import './globals.css'

const kayonest = localFont({
  src: '../public/fonts/kayonest.woff2',
  variable: '--font-kayonest',
  display: 'swap',
})

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ponto M Moda Íntima | Sex Shop em Guarulhos',
  description:
    'Lingeries, fantasias, cosméticos sensuais, vibradores e acessórios com total discrição. Entrega no mesmo dia em Guarulhos e atendimento personalizado.',
  keywords: [
    'sex shop guarulhos',
    'moda íntima',
    'lingerie',
    'cosméticos sensuais',
    'vibradores',
    'entrega discreta',
    'Ponto M',
  ],
  openGraph: {
    title: 'Ponto M Moda Íntima | Sex Shop em Guarulhos',
    description:
      'Coleção premium de moda íntima com entrega discreta no mesmo dia em Guarulhos.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#0b0705',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark bg-background ${kayonest.variable} ${sora.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}