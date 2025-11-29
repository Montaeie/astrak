import React from 'react'
import { Header, Footer } from '@/components/layout'
import { CTASection } from '@/components/sections'
import { Badge, ArticleCard } from '@/components/ui'
import { getPayload } from '@/lib/payload'
import type { Article, Media, Category } from '@/payload-types'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Blog SEO - Astrak | Actualités et conseils SEO',
  description: 'Nos experts SEO, Paid, Content et Data vous partagent des dernières tendances et nouveautés de l\'acquisition digitale.',
}

export default async function BlogPage() {
  let articles: Article[] = []

  try {
    const payload = await getPayload()
    const result = await payload.find({
      collection: 'articles',
      where: {
        _status: { equals: 'published' },
      },
      sort: '-publishedAt',
      limit: 12,
      depth: 2,
    })
    articles = result.docs
  } catch (error) {
    console.error('Error fetching articles:', error)
  }

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
            {articles.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => {
                  const featuredImage = article.featuredImage as Media | undefined
                  const category = article.category as Category | undefined

                  return (
                    <ArticleCard
                      key={article.id}
                      title={article.title}
                      excerpt={article.excerpt}
                      image={featuredImage?.url || '/images/placeholder.jpg'}
                      href={`/blog/${article.slug}`}
                      category={category?.name || 'Article'}
                    />
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  Aucun article publié pour le moment. Revenez bientôt !
                </p>
              </div>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
