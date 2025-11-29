import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const results = [
  {
    client: 'MyBrocante',
    stat: '+140%',
    label: 'de traffic organique en 6 mois',
    href: '/etudes-de-cas/mybrocante',
    icon: '/images/icons/icon-mybrocante.svg',
  },
  {
    client: 'Nativus CBD',
    stat: 'Top 3 Google',
    label: 'sur 10 mots-clés stratégiques',
    href: '/etudes-de-cas/nativus-cbd',
    icon: '/images/icons/icon-nativus-CBD.svg',
  },
  {
    client: 'Assistant Rénov',
    stat: '+60%',
    label: 'de leads qualifiés après refonte',
    href: '/etudes-de-cas/assistant-renov',
    icon: '/images/icons/icon-assistant-renov.svg',
  },
]

export function Results() {
  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-astrak-dark">
            Nos réussites parlent d'elles-mêmes
          </h2>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result) => (
            <div
              key={result.client}
              className="bg-white text-center p-8 md:p-10 rounded-3xl shadow-sm"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <Image
                  src={result.icon}
                  alt={result.client}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
              </div>

              <p className="text-astrak-dark font-medium mb-6">{result.client}</p>

              <p className="text-3xl md:text-4xl font-bold text-astrak-dark mb-2">
                {result.stat}
              </p>

              <p className="text-gray-500 text-sm mb-8">{result.label}</p>

              <Link
                href={result.href}
                className="text-astrak-dark font-medium text-sm underline underline-offset-4 hover:text-cyan-dark transition-colors"
              >
                Découvrir l'études de cas
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
