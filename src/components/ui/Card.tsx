import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  children: React.ReactNode
  className?: string
  href?: string
}

export function Card({ children, className = '', href }: CardProps) {
  const cardStyles = `bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 ${className}`

  if (href) {
    return (
      <Link href={href} className={cardStyles}>
        {children}
      </Link>
    )
  }

  return <div className={cardStyles}>{children}</div>
}

interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  href: string
  category?: string
}

export function ArticleCard({ title, excerpt, image, href, category }: ArticleCardProps) {
  return (
    <Card href={href} className="overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {category && (
          <span className="absolute top-4 left-4 bg-astrak-yellow text-astrak-dark text-xs font-semibold px-3 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-astrak-dark mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">{excerpt}</p>
        <span className="text-astrak-dark font-semibold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
          Lire la suite
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Card>
  )
}

interface TestimonialCardProps {
  content: string
  authorName: string
  authorRole?: string
  authorPhoto?: string
  company?: string
  companyLogo?: string
  sector?: string
}

export function TestimonialCard({
  content,
  authorName,
  authorRole,
  authorPhoto,
  company,
  companyLogo,
  sector,
}: TestimonialCardProps) {
  return (
    <Card className="p-6">
      {(company || companyLogo) && (
        <div className="flex items-center gap-3 mb-4">
          {companyLogo && (
            <Image src={companyLogo} alt={company || ''} width={40} height={40} className="object-contain" />
          )}
          <div>
            {company && <p className="font-semibold text-astrak-dark">{company}</p>}
            {sector && <p className="text-sm text-gray-500">{sector}</p>}
          </div>
        </div>
      )}
      <p className="text-gray-700 mb-6 leading-relaxed">"{content}"</p>
      <div className="flex items-center gap-3">
        {authorPhoto ? (
          <Image
            src={authorPhoto}
            alt={authorName}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-astrak-gray flex items-center justify-center">
            <span className="text-astrak-dark font-semibold">
              {authorName.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-astrak-dark">{authorName}</p>
          {authorRole && <p className="text-sm text-gray-500">{authorRole}</p>}
        </div>
      </div>
    </Card>
  )
}

interface StatCardProps {
  value: string
  label: string
  icon?: React.ReactNode
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <Card className="p-6 text-center">
      {icon && <div className="mb-4 flex justify-center">{icon}</div>}
      <p className="text-3xl md:text-4xl font-bold text-cyan-light mb-2">{value}</p>
      <p className="text-gray-600 text-sm">{label}</p>
    </Card>
  )
}
