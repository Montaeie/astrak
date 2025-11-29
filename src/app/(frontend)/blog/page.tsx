import React from 'react'
import { Header, Footer } from '@/components/layout'
import { CTASection } from '@/components/sections'
import { Badge, ArticleCard } from '@/components/ui'

// Mock data - will be replaced with Payload CMS data
const articles = [
  {
    title: 'Consultant SEO : Expert en Visibilité IA Générative',
    excerpt: 'Consultant GEO : Expert en Visibilité IA Générative Trouvez le meilleur expert pour optimiser votre présence sur ChatGPT...',
    image: '/images/blog/consultant-geo.jpg',
    href: '/blog/consultant-geo-expert-visibilite-ia-generative',
    category: 'IA Générative',
  },
  {
    title: 'Comment obtenir des liens GRATUITS grâce à skeletor ?',
    excerpt: 'La pyramide inversée est une méthode d\'écriture qui consiste à structurer un texte en commençant par les informations...',
    image: '/images/blog/liens-gratuits.jpg',
    href: '/blog/comment-obtenir-liens-gratuits-skeletor',
    category: 'Netlinking',
  },
  {
    title: 'Agence SEO International : boostez votre visibilité mondiale',
    excerpt: 'Le monde numérique ne connaît pas de frontières. C\'est pourquoi de nombreuses entreprises font appel à des experts...',
    image: '/images/blog/seo-international.jpg',
    href: '/blog/agence-seo-international',
    category: 'SEO',
  },
  {
    title: 'La Pyramide Inversée : Technique de Rédaction Web pour un meilleur SEO',
    excerpt: 'La pyramide inversée est une méthode d\'écriture qui consiste à structurer un texte en plaçant les informations...',
    image: '/images/blog/pyramide-inversee.jpg',
    href: '/blog/pyramide-inversee-technique-redaction-web',
    category: 'SEO',
  },
  {
    title: 'Agence SEO Le Havre : boostez votre visibilité locale',
    excerpt: 'Nous accompagnons les entreprises du Havre pour maximiser leur présence locale et attirer des clients qualifiés...',
    image: '/images/blog/seo-le-havre.jpg',
    href: '/blog/agence-seo-le-havre',
    category: 'SEO Local',
  },
  {
    title: 'Agence SEO Astrak Strasbourg',
    excerpt: 'Nous accompagnons les entreprises de Strasbourg pour maximiser leur présence en ligne et dominer les résultats...',
    image: '/images/blog/seo-strasbourg.jpg',
    href: '/blog/agence-seo-strasbourg',
    category: 'SEO Local',
  },
]

export const metadata = {
  title: 'Blog SEO - Astrak | Actualités et conseils SEO',
  description: 'Nos experts SEO, Paid, Content et Data vous partagent des dernières tendances et nouveautés de l\'acquisition digitale.',
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-astrak-dark pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Notre Blog <span className="gradient-text">SEO</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Nos experts SEO, Paid, Content et Data vous partagent des dernières tendances et nouveautés de l'acquisition digitale. Vous trouverez aussi des tips concrets à mettre en place dans votre entreprise.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="cyan">+20 clients satisfaits</Badge>
              <Badge variant="cyan">+25% abonnés sur le RS</Badge>
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-astrak-dark mb-4">
                  Nos derniers articles
                </h2>
                <p className="text-gray-600">
                  Tenez-vous informer des dernières Actu, SEO sur notre site et nos différents réseaux sociaux.
                </p>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  title={article.title}
                  excerpt={article.excerpt}
                  image={article.image}
                  href={article.href}
                  category={article.category}
                />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
