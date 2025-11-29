'use client'

import React, { useRef } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    content:
      "Je recommande à 100% ! Après avoir fait appel à plusieurs free-lance pour du conseil en référencement, en web développement ou autres prestations liés à mon e-commerce administré via WordPress j'ai enfin trouvé une personne à la fois fiable et compétente mais aussi professionnelle et sympathique. Du bon boulot, des idées et du suivi ! N'hésitez pas à lui faire confiance !",
    authorName: 'Mathilde Corbin',
    authorRole: 'Fondatrice',
    company: 'YOGOM',
    sector: 'Sport & Fitness',
    authorPhoto: '/images/clients/mathilde-corbin.jpg',
  },
  {
    content:
      "Travailler avec Léo est une véritable chance. Non seulement il excelle dans le domaine du SEO, mais il apporte également une vision business aiguisée qui fait toute la différence. Léo est sans conteste l'un des meilleurs experts SEO que j'ai eu l'occasion de rencontrer, reconnu dans la sphère francophone pour son approche avant-gardiste et ses trouvailles toujours innovantes. Collaborer avec lui depuis un an a été un réel plaisir, et ...",
    authorName: 'Romain Pirotte',
    authorRole: 'Automation, R&D, SEO Hacks & Tips',
    company: 'Black Hat SEO',
    sector: 'Marketing & Publicité',
    authorPhoto: '/images/clients/romain-pirotte.jpg',
  },
  {
    content:
      "Léo m'a aidé pendant 4 mois sur le SEO de mon site thématique concurrentielle sur le \"Gambling\" et j'ai été très satisfait. Il maitrise parfaitement le netlinking et m'a trouvé les meilleurs spots aux prix les plus attractifs pour booker tous les mois mes backlinks. Au dela du netlinking il m'a apporté de vrais conseils sur la stratégie à mettre en place sur le long terme pour obtenir des résultats concrets très ...",
    authorName: 'Alain ABULAFYA',
    authorRole: 'Indépendant',
    company: 'Editeur de site independant',
    sector: 'Media',
    authorPhoto: '/images/clients/alain-abulafya.jpg',
  },
  {
    content:
      "Nous avons travaillé avec Astrak pour les premiers investissements en référencement naturel de notre site Assistant Rénov. Astrak a bien compris les spécificités de notre activité et a su proposer une stratégie SEO pertinente, qui a montré des résultats prometteurs en termes de ranking et de volume de leads. Au-delà de la stratégie globale, Léo et son équipe nous ont aussi accompagnés sur des petits détails techniques liés au site, toujours avec ...",
    authorName: 'Hugo ELIKI ROMAN',
    company: 'Assistant Rénov',
    authorPhoto: '/images/clients/hugo-eliki-roman.jpg',
  },
  {
    content:
      "Nous avons fait appel à Astrak pour notre stratégie SEO et nous en sommes très satisfaits. En moins de 6 mois, nous sommes passés premiers sur Google sur des requêtes clés, ce qui a eu un impact direct et positif sur notre visibilité et notre activité. Leur approche sur-mesure, leur réactivité et leur expertise nous ont permis d'atteindre rapidement nos objectifs. Nous recommandons vivement Astrak pour toute entreprise souhaitant booster son ...",
    authorName: 'Manon Gras',
    authorRole: 'International Senior Sales',
    company: 'Kowee',
    authorPhoto: '/images/clients/manon-gras.jpg',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-astrak-dark">
          Ils nous ont fait confiance
        </h2>
      </div>

      {/* Testimonials Carousel - Full width */}
      <div
        className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide px-4 md:px-8"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[420px] md:w-[500px]"
          >
            <div className="h-full min-h-[380px] p-8 bg-white rounded-t-2xl rounded-b-[40px] shadow-sm flex flex-col">
              {/* Company info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 font-medium text-sm">
                    {testimonial.company.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-astrak-dark text-sm">
                    {testimonial.company}
                  </p>
                  {testimonial.sector && (
                    <p className="text-xs text-gray-500">{testimonial.sector}</p>
                  )}
                </div>
              </div>

              {/* Quote */}
              <div className="relative flex-grow mb-6">
                <span className="text-4xl text-gray-300 font-serif leading-none absolute -top-2 -left-1">"</span>
                <p className="text-gray-600 leading-relaxed text-sm pl-5">
                  {testimonial.content}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  {testimonial.authorPhoto ? (
                    <Image
                      src={testimonial.authorPhoto}
                      alt={testimonial.authorName}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-astrak-dark font-semibold">
                        {testimonial.authorName.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-astrak-dark">
                    {testimonial.authorName}
                  </p>
                  {testimonial.authorRole && (
                    <p className="text-sm text-gray-500">{testimonial.authorRole}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
