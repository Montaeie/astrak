import React from 'react'
import { Outfit } from 'next/font/google'
import './styles.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Astrak - Agence SEO Expert',
  description: 'On va accélérer ton SEO. Audit technique, stratégie de contenu, netlinking premium et plus de trafic de qualité.',
  keywords: 'SEO, référencement, agence SEO, audit SEO, netlinking, ChatGPT, IA générative',
  openGraph: {
    title: 'Astrak - Agence SEO Expert',
    description: 'On va accélérer ton SEO. Audit technique, stratégie de contenu, netlinking premium.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body className="antialiased" style={{ fontFamily: 'Outfit, sans-serif' }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
