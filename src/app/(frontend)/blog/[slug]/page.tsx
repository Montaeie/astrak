import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'
import { CTASection } from '@/components/sections'
import { Badge, Button } from '@/components/ui'

// Mock data - will be replaced with Payload CMS data
const articleData = {
  title: 'Consultant GEO : Expert en Visibilité IA Générative',
  excerpt: 'Trouvez le meilleur expert pour optimiser votre présence sur ChatGPT, Perplexity, Claude et tous les engines conversationnels.',
  category: 'IA Générative',
  publishedAt: '31 Octobre 2025',
  author: {
    name: 'Léo POITEVIN',
    role: 'CEO Astrak',
    avatar: '/images/leo-author.png',
  },
  featuredImage: '/images/blog/consultant-geo.jpg',
  content: `
    <h2>Qu'est-ce qu'un consultant GEO ?</h2>
    <p>Un professionnel spécialisé dans la Generative Engine Optimization représente aujourd'hui un levier essentiel pour toute entreprise souhaitant être visible sur les plateformes d'IA. Contrairement aux consultants traditionnels, le consultant GEO comme Guillaume Payet ou Elliott Bobiet maîtrise les mécanismes complexes qui permettent à votre marque d'apparaître dans les dialogues avec ChatGPT ou Perplexity.</p>
    <p>Cette expertise unique en prompt engineering s'articule autour d'une compréhension approfondie des nouveaux comportements utilisateur : l'assistant virtuel devient l'intermédiaire privilégié entre votre information et vos cibles.</p>

    <h2>Comment développer une approche GEO performante ?</h2>
    <p>Pour construire une expérience enrichie sur les plateformes conversationnelles, une méthodologie pratique et fiable s'impose. Le professionnel commence par analyser votre site web actuel, identifier les opportunités spécifiques à votre secteur et celui de vos concurrents.</p>
    <p>L'approche diffère radicalement des méthodes traditionnelles. Elle privilégie également une sécurité approfondie et une question de l'utilisateur et l'intention de navigation.</p>

    <h2>Quels outils et méthodes pour performer ?</h2>
    <p>Les professionnels expérimentés utilisent un arsenal d'outils d'optimisation sophistiqués pour analyser et améliorer votre position sur les plateformes conversationnelles. GPT-4, Gemini et Perplexity deviennent à la fois des cibles et des instruments de test pour valider les opportunités mises en place.</p>

    <h2>Quels bénéfices pour votre entreprise ?</h2>
    <p>L'approche GEO transforme radicalement votre position sur le web en vous propulsant directement dans les dialogues des assistants virtuels, éliminant ainsi la baisse de clic. Cette présence directe génère un trafic hautement pertinent vers des taux de conversion 7x supérieurs aux méthodes traditionnelles.</p>
  `,
  stats: [
    { value: '+312%', label: 'Augmentation taux de citation' },
    { value: '2.5x', label: 'Trafic qualifié vs SEO' },
    { value: '-47%', label: "Coût d'acquisition" },
    { value: '87%', label: 'Coverage Query Format' },
  ],
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return {
    title: `${articleData.title} - Blog Astrak`,
    description: articleData.excerpt,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-astrak-dark pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <Badge variant="yellow">{articleData.category}</Badge>
              <span className="text-gray-400 text-sm">{articleData.publishedAt}</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {articleData.title}
            </h1>

            <p className="text-lg text-gray-300 mb-8">{articleData.excerpt}</p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-astrak-gray overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-cyan-light/20">
                  <span className="text-white font-semibold">
                    {articleData.author.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-white font-semibold">{articleData.author.name}</p>
                <p className="text-gray-400 text-sm">{articleData.author.role}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {articleData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-cyan-light">{stat.value}</p>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <article
              className="prose prose-lg max-w-none prose-headings:text-astrak-dark prose-headings:font-bold prose-p:text-gray-700 prose-a:text-cyan-dark"
              dangerouslySetInnerHTML={{ __html: articleData.content }}
            />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
