import React from 'react'
import Image from 'next/image'

const partners = [
  { name: 'Business Time', logo: '/images/clients/logoclient-bonustyme.png' },
  { name: 'mybrocante', logo: '/images/clients/logoclient-mybrocante.png' },
  { name: 'trustup', logo: '/images/clients/logoclient-trustup.png' },
  { name: 'Interflora', logo: '/images/clients/logoclient-interflora.png' },
  { name: 'KOWEE', logo: '/images/clients/logoclient-kowee.png' },
  { name: 'Sixty8', logo: '/images/clients/logoclient-sixty8.png' },
  { name: 'Findymail', logo: '/images/clients/logoclient-findymail.png' },
  { name: 'Place du Jour', logo: '/images/clients/logo-placedujour.png' },
]

export function PartnersLogos() {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="opacity-40 hover:opacity-70 transition-opacity grayscale invert">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={40}
                className="h-10 md:h-14 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
