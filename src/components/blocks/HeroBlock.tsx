import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/Button'
import type { HeroBlock } from '@/payload-types'

// Icon components (from original Hero)
function IconUp() {
  return (
    <svg width="48" height="48" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M34.2726 23.8869L40.504 30.1183C40.7794 30.3938 40.9342 30.7673 40.9342 31.1569C40.9342 31.5464 40.7794 31.92 40.504 32.1954C40.2285 32.4709 39.8549 32.6256 39.4654 32.6256C39.0759 32.6256 38.7023 32.4709 38.4268 32.1954L34.7023 28.4709L34.7036 41.5425C34.7036 41.7355 34.6656 41.9266 34.5917 42.1049C34.5179 42.2832 34.4096 42.4452 34.2732 42.5817C34.1367 42.7181 33.9747 42.8264 33.7964 42.9002C33.6181 42.9741 33.427 43.0121 33.234 43.0121C33.041 43.0121 32.8499 42.9741 32.6717 42.9002C32.4934 42.8264 32.3314 42.7181 32.1949 42.5817C32.0584 42.4452 31.9502 42.2832 31.8763 42.1049C31.8025 41.9266 31.7645 41.7355 31.7645 41.5425L31.7658 28.4709L28.0412 32.1954C27.7658 32.4709 27.3922 32.6256 27.0027 32.6256C26.6131 32.6256 26.2395 32.4709 25.9641 32.1954C25.6886 31.92 25.5339 31.5464 25.5339 31.1569C25.5339 30.7673 25.6886 30.3938 25.9641 30.1183L32.1955 23.8869C32.4709 23.6115 32.8445 23.4568 33.234 23.4568C33.6236 23.4568 33.9971 23.6115 34.2726 23.8869ZM46.7353 19.7327C49.4057 22.403 51.2242 25.8052 51.9609 29.509C52.6976 33.2128 52.3195 37.0519 50.8744 40.5409C49.4292 44.0298 46.9819 47.0118 43.8419 49.1099C40.702 51.2079 37.0104 52.3278 33.234 52.3278C29.4576 52.3278 25.7661 51.2079 22.6261 49.1099C19.4862 47.0118 17.0389 44.0298 15.5937 40.5409C14.1485 37.0519 13.7704 33.2128 14.5072 29.509C15.2439 25.8052 17.0624 22.403 19.7327 19.7327C23.3161 16.1569 28.1717 14.1486 33.234 14.1486C38.2964 14.1486 43.152 16.1569 46.7353 19.7327ZM44.6582 21.8098C42.3987 19.5503 39.52 18.0116 36.386 17.3882C33.252 16.7648 30.0035 17.0848 27.0513 18.3076C24.0991 19.5304 21.5759 21.6012 19.8006 24.2581C18.0253 26.915 17.0778 30.0386 17.0778 33.234C17.0778 36.4294 18.0253 39.5531 19.8006 42.2099C21.5759 44.8668 24.0991 46.9376 27.0513 48.1604C30.0035 49.3833 33.252 49.7032 36.386 49.0798C39.52 48.4564 42.3987 46.9177 44.6582 44.6582C47.6836 41.6259 49.3827 37.5174 49.3827 33.234C49.3827 28.9506 47.6836 24.8421 44.6582 21.8098Z" fill="#8DD521"/>
    </svg>
  )
}

function IconDown() {
  return (
    <svg width="48" height="48" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M32.1955 42.5811L25.9641 36.3497C25.6887 36.0743 25.5339 35.7007 25.5339 35.3111C25.5339 34.9216 25.6887 34.548 25.9641 34.2726C26.2396 33.9971 26.6132 33.8424 27.0027 33.8424C27.3922 33.8424 27.7658 33.9971 28.0413 34.2726L31.7658 37.9971L31.7645 24.9255C31.7645 24.7325 31.8025 24.5414 31.8764 24.3631C31.9502 24.1848 32.0585 24.0228 32.1949 23.8864C32.3314 23.7499 32.4934 23.6417 32.6717 23.5678C32.85 23.494 33.0411 23.456 33.2341 23.456C33.4271 23.456 33.6182 23.494 33.7964 23.5678C33.9747 23.6417 34.1367 23.7499 34.2732 23.8864C34.4097 24.0228 34.5179 24.1848 34.5918 24.3631C34.6656 24.5414 34.7036 24.7325 34.7036 24.9255L34.7023 37.9971L38.4269 34.2726C38.7023 33.9971 39.0759 33.8424 39.4654 33.8424C39.855 33.8424 40.2286 33.9971 40.504 34.2726C40.7795 34.548 40.9342 34.9216 40.9342 35.3112C40.9342 35.7007 40.7795 36.0743 40.504 36.3497L34.2726 42.5811C33.9972 42.8565 33.6236 43.0113 33.2341 43.0113C32.8445 43.0113 32.4709 42.8565 32.1955 42.5811ZM19.7327 46.7353C17.0624 44.065 15.2439 40.6629 14.5072 36.959C13.7705 33.2552 14.1486 29.4161 15.5937 25.9272C17.0389 22.4382 19.4862 19.4562 22.6261 17.3582C25.7661 15.2601 29.4577 14.1403 33.2341 14.1403C37.0105 14.1403 40.702 15.2601 43.842 17.3582C46.9819 19.4562 49.4292 22.4382 50.8744 25.9272C52.3196 29.4161 52.6977 33.2552 51.9609 36.959C51.2242 40.6629 49.4057 44.065 46.7354 46.7353C43.152 50.3112 38.2964 52.3194 33.2341 52.3194C28.1717 52.3194 23.3161 50.3112 19.7327 46.7353ZM21.8099 44.6582C24.0694 46.9177 26.9481 48.4564 30.0821 49.0798C33.2161 49.7032 36.4646 49.3833 39.4168 48.1605C42.369 46.9376 44.8922 44.8668 46.6675 42.21C48.4428 39.5531 49.3903 36.4294 49.3903 33.234C49.3903 30.0386 48.4428 26.915 46.6675 24.2581C44.8922 21.6012 42.369 19.5304 39.4168 18.3076C36.4646 17.0848 33.2161 16.7648 30.0821 17.3882C26.9481 18.0116 24.0694 19.5503 21.8099 21.8098C18.7845 24.8421 17.0854 28.9506 17.0854 33.234C17.0854 37.5174 18.7845 41.626 21.8099 44.6582Z" fill="#E75A5A"/>
    </svg>
  )
}

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="0.706656" y="0.706656" width="15.1247" height="13.6195" rx="6.80976" stroke="currentColor" strokeWidth="1.41331"/>
      <path d="M3.99878 7.95342L6.71325 10.3663L12.2426 4.23364" stroke="currentColor" strokeWidth="1.334"/>
    </svg>
  )
}

interface HeroBlockRendererProps {
  block: HeroBlock
}

export function HeroBlockRenderer({ block }: HeroBlockRendererProps) {
  // Use block data with fallbacks to defaults
  const title = block.title || "On va accélérer ton SEO"
  const highlightedWord = block.highlightedWord || "SEO"
  const description = block.description || "On t'aide a ranker plus vite et au mieux: audit technique, stratégie de contenu, netlinkling premium et stratégie."
  const badges = block.badges || [{ text: '+30 clients satisfaits' }, { text: '+20k abonnés sur le RS' }]
  const ctaLabel = block.cta?.label || 'Audit SEO Gratuit'
  const ctaLink = block.cta?.link || '/contact'
  const stats = block.stats || { visitors: '304 k', impressions: '7,57 M', ctr: '7%', position: '3,9' }
  const floatingBadges = block.floatingBadges || {
    upBadge: { title: '+345 Nouveau Visiteurs', subtitle: 'dans les dernières 24h' },
    downBadge: { title: "-47% Coût d'acquisition", subtitle: 'depuis la mise a jour' },
  }

  // Parse title to highlight the word
  const renderTitle = () => {
    if (!highlightedWord) return title
    const parts = title.split(new RegExp(`(${highlightedWord})`, 'gi'))
    return parts.map((part, i) =>
      part.toLowerCase() === highlightedWord.toLowerCase() ? (
        <span key={i} className="text-astrak-yellow">{part}</span>
      ) : (
        part
      )
    )
  }

  return (
    <section className="relative bg-transparent pt-24 sm:pt-32 lg:pt-40 pb-6 sm:pb-8 lg:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-astrak-dark rounded-2xl lg:rounded-3xl px-6 sm:px-10 lg:px-16 py-12 lg:py-20 overflow-visible">
          {/* Top floating badge */}
          <div className="hidden lg:block absolute -top-8 right-1/3 z-30">
            <div className="rounded-2xl px-5 py-3.5 flex items-center gap-3 badge-glass-up">
              <IconUp />
              <div>
                <p className="text-white font-semibold text-base">{floatingBadges.upBadge?.title}</p>
                <p className="text-white/60 text-sm">{floatingBadges.upBadge?.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Bottom floating badge */}
          <div className="hidden lg:block absolute -bottom-8 right-16 z-30">
            <div className="rounded-2xl px-5 py-3.5 flex items-center gap-3 badge-glass-down">
              <IconDown />
              <div>
                <p className="text-white font-semibold text-base">{floatingBadges.downBadge?.title}</p>
                <p className="text-white/60 text-sm">{floatingBadges.downBadge?.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Background radial gradients */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl">
            <div
              className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
              style={{
                background: 'radial-gradient(ellipse at center, #79F2EC 0%, #468C89 40%, transparent 70%)'
              }}
            />
            <div
              className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-50"
              style={{
                background: 'radial-gradient(ellipse at center, #79F2EC 0%, #468C89 40%, transparent 70%)'
              }}
            />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-[1.05]">
                {renderTitle()}
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
                {description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {badges.map((badge, i) => (
                  <span key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium">
                    {badge.text}
                  </span>
                ))}
              </div>

              <Button href={ctaLink} variant="primary" className="text-lg px-8 py-4">
                {ctaLabel}
              </Button>
            </div>

            {/* Right Content - GSC Dashboard */}
            <div className="relative lg:-mr-12 xl:-mr-24 overflow-visible">
              <div className="rounded-3xl p-5 relative dashboard-glass">
                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-2 mb-5">
                  <div className="bg-gsc-blue border border-gsc-blue rounded-xl p-3 text-center">
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-white" />
                      <span className="text-white/70 text-[10px]">Nombre totale de</span>
                    </div>
                    <p className="text-white/70 text-[10px] mb-1">visiteurs</p>
                    <p className="text-2xl font-bold text-white">{stats.visitors}</p>
                  </div>

                  <div className="bg-gsc-violet border border-gsc-violet rounded-xl p-3 text-center">
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <CheckIcon className="w-3.5 h-3.5 text-white" />
                      <span className="text-white/70 text-[10px]">Nombre totale</span>
                    </div>
                    <p className="text-white/70 text-[10px] mb-1">d'impressions</p>
                    <p className="text-2xl font-bold text-white">{stats.impressions}</p>
                  </div>

                  <div className="p-3 text-center">
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-white/40" />
                      <span className="text-white/70 text-[10px]">CTA moyen</span>
                    </div>
                    <p className="text-2xl font-bold text-white mt-3">{stats.ctr}</p>
                  </div>

                  <div className="p-3 text-center">
                    <div className="flex items-center justify-center gap-1 mb-0.5">
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-white/40" />
                      <span className="text-white/70 text-[10px]">Position moyenne</span>
                    </div>
                    <p className="text-2xl font-bold text-white mt-3">{stats.position}</p>
                  </div>
                </div>

                {/* Graph Section */}
                <div className="relative rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gsc-blue text-xs font-medium">Clics</span>
                    <span className="text-gsc-violet text-xs font-medium">Impressions</span>
                  </div>

                  <div className="h-28 relative">
                    <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                      {[0, 1, 2, 3].map((i) => (
                        <line
                          key={i}
                          x1="0"
                          y1={20 * i}
                          x2="400"
                          y2={20 * i}
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="1"
                        />
                      ))}
                      <path
                        d="M0,75 C20,70 40,65 60,55 C80,45 100,35 120,30 C140,25 160,20 180,18 C200,16 220,15 240,14 C260,13 280,12 300,10 C320,8 340,6 360,5 C380,4 400,3 400,2"
                        fill="none"
                        stroke="#A16CFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M0,76 C20,72 40,68 60,60 C80,52 100,44 120,38 C140,32 160,28 180,25 C200,22 220,20 240,18 C260,16 280,14 300,13 C320,12 340,10 360,9 C380,8 400,8 400,7"
                        fill="none"
                        stroke="#5694FF"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div className="flex justify-between text-white text-xs mt-2">
                    <span>12/2024</span>
                    <span>05/2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile badges */}
          <div className="lg:hidden grid grid-cols-2 gap-3 mt-8">
            <div className="rounded-2xl px-3 py-2.5 flex items-center gap-2 badge-glass-up">
              <IconUp />
              <div>
                <p className="text-white font-semibold text-xs">{floatingBadges.upBadge?.title}</p>
                <p className="text-white/60 text-[10px]">{floatingBadges.upBadge?.subtitle}</p>
              </div>
            </div>
            <div className="rounded-2xl px-3 py-2.5 flex items-center gap-2 badge-glass-down">
              <IconDown />
              <div>
                <p className="text-white font-semibold text-xs">{floatingBadges.downBadge?.title}</p>
                <p className="text-white/60 text-[10px]">{floatingBadges.downBadge?.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
