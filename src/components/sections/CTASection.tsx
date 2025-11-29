import Link from 'next/link'

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  title = 'Prêt à propulser ta visibilité sur Google?',
  subtitle = 'Commence par un audit SEO gratuit et découvre ton potentiel de croissance',
  buttonText = 'Prendre Rendez-vous',
  buttonHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-16 md:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blue card container */}
        <div className="relative bg-astrak-dark rounded-3xl py-16 md:py-24 px-6 md:px-12 overflow-hidden">
          {/* Top right ellipse - lighter */}
          <div
            className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, #79F2EC 0%, #468C89 40%, transparent 70%)'
            }}
          />

          {/* Bottom left ellipse - more visible */}
          <div
            className="absolute -bottom-64 -left-40 w-[600px] h-[600px] rounded-full opacity-50 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, #79F2EC 0%, #468C89 40%, transparent 70%)'
            }}
          />

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
            <Link
              href={buttonHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-astrak-yellow text-astrak-dark font-semibold rounded-xl hover:opacity-90 transition-colors"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
