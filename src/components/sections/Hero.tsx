import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/Button'

// Icon components
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

export function Hero() {
  return (
    <section className="relative bg-transparent pt-24 sm:pt-32 lg:pt-40 pb-6 sm:pb-8 lg:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Blue container with rounded corners */}
        <div className="relative bg-astrak-dark rounded-2xl lg:rounded-3xl px-6 sm:px-10 lg:px-16 py-12 lg:py-20 overflow-visible">
          {/* Top floating badge - Nouveaux Visiteurs - déborde vers le haut */}
          <div className="hidden lg:block absolute -top-8 right-1/3 z-30">
            <div className="rounded-2xl px-5 py-3.5 flex items-center gap-3 badge-glass-up">
            <IconUp />
            <div>
              <p className="text-white font-semibold text-base">+345 Nouveau Visiteurs</p>
              <p className="text-white/60 text-sm">dans les dernières 24h</p>
            </div>
            </div>
          </div>

          {/* Bottom floating badge - Coût d'acquisition - déborde vers le bas */}
          <div className="hidden lg:block absolute -bottom-8 right-16 z-30">
            <div className="rounded-2xl px-5 py-3.5 flex items-center gap-3 badge-glass-down">
              <IconDown />
              <div>
                <p className="text-white font-semibold text-base">-47% Coût d'acquisition</p>
                <p className="text-white/60 text-sm">depuis la mise a jour</p>
              </div>
            </div>
          </div>

          {/* Background radial gradients - cyan ellipses */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl lg:rounded-3xl">
            {/* Top right ellipse - lighter */}
            <div
              className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10"
              style={{
                background: 'radial-gradient(ellipse at center, #79F2EC 0%, #468C89 40%, transparent 70%)'
              }}
            />
            {/* Bottom left ellipse - more visible */}
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
              On va accélérer<br />
              ton <span className="text-astrak-yellow">SEO</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              On t'aide a ranker plus vite et au mieux: audit technique, stratégie de contenu, netlinkling premium et stratégie. Moins de process et plus de traffic de qualité et de leads.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium">
                +30 clients satisfaits
              </span>
              <span className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium">
                +20k abonnés sur le RS
              </span>
            </div>

            <Button href="/contact" variant="primary" className="text-lg px-8 py-4">
              Audit SEO Gratuit
            </Button>
          </div>

          {/* Right Content - GSC Dashboard - déborde à droite */}
          <div className="relative lg:-mr-12 xl:-mr-24 overflow-visible">
            {/* Main Dashboard Card */}
            <div className="rounded-3xl p-5 relative dashboard-glass">
              {/* Stats Row */}
              <div className="grid grid-cols-4 gap-2 mb-5">
                {/* Visiteurs - highlighted */}
                <div className="bg-gsc-blue border border-gsc-blue rounded-xl p-3 text-center">
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-white" />
                    <span className="text-white/70 text-[10px]">Nombre totale de</span>
                  </div>
                  <p className="text-white/70 text-[10px] mb-1">visiteurs</p>
                  <p className="text-2xl font-bold text-white">304 k</p>
                </div>

                {/* Impressions - highlighted violet */}
                <div className="bg-gsc-violet border border-gsc-violet rounded-xl p-3 text-center">
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <CheckIcon className="w-3.5 h-3.5 text-white" />
                    <span className="text-white/70 text-[10px]">Nombre totale</span>
                  </div>
                  <p className="text-white/70 text-[10px] mb-1">d'impressions</p>
                  <p className="text-2xl font-bold text-white">7,57 M</p>
                </div>

                {/* CTA moyen */}
                <div className="p-3 text-center">
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-white/40" />
                    <span className="text-white/70 text-[10px]">CTA moyen</span>
                  </div>
                  <p className="text-2xl font-bold text-white mt-3">7%</p>
                </div>

                {/* Position moyenne */}
                <div className="p-3 text-center">
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <div className="w-2.5 h-2.5 rounded-full border-2 border-white/40" />
                    <span className="text-white/70 text-[10px]">Potition moyenne</span>
                  </div>
                  <p className="text-2xl font-bold text-white mt-3">3,9</p>
                </div>
              </div>

              {/* Graph Section */}
              <div className="relative rounded-xl p-4">
                {/* Legend */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gsc-blue text-xs font-medium">Clics</span>
                  <span className="text-gsc-violet text-xs font-medium">Impressions</span>
                </div>

                {/* Graph */}
                <div className="h-28 relative">
                  <svg className="w-full h-full" viewBox="0 0 400 80" preserveAspectRatio="none">
                    {/* Grid lines */}
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

                    {/* Violet line (Impressions) - oscillations arrondies rapides croissantes style GSC */}
                    <path
                      d="M0,75 C3,75 5,74 8,75 C11,74 13,75 16,74 C19,75 21,73 24,74 C27,73 29,74 32,72 C35,74 37,71 40,73 C43,70 45,72 48,69 C51,72 53,68 56,71 C59,67 61,70 64,66 C67,70 69,65 72,68 C75,63 77,67 80,62 C83,67 85,60 88,65 C91,58 93,64 96,56 C99,64 101,54 104,62 C107,52 109,60 112,48 C115,60 117,46 120,58 C123,44 125,56 128,42 C131,56 133,40 136,52 C139,38 141,50 144,35 C147,50 149,32 152,48 C155,30 157,46 160,28 C163,46 165,26 168,42 C171,24 173,40 176,22 C179,40 181,20 184,38 C187,18 189,36 192,16 C195,36 197,14 200,32 C203,12 205,30 208,10 C211,30 213,12 216,28 C219,10 221,26 224,14 C227,28 229,16 232,24 C235,14 237,22 240,18 C243,24 245,16 248,22 C251,14 253,20 256,16 C259,22 261,14 264,20 C267,12 269,18 272,14 C275,20 277,12 280,18 C283,10 285,16 288,12 C291,18 293,10 296,16 C299,8 301,14 304,10 C307,16 309,8 312,14 C315,6 317,12 320,8 C323,14 325,6 328,12 C331,4 333,10 336,6 C339,12 341,4 344,10 C347,2 349,8 352,5 C355,10 357,3 360,8 C363,2 365,6 368,4 C371,8 373,2 376,6 C379,0 381,4 384,2 C387,6 389,0 392,4 C395,0 397,2 400,2"
                      fill="none"
                      stroke="#A16CFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    {/* Blue line (Clicks) - oscillations arrondies rapides croissantes style GSC */}
                    <path
                      d="M0,76 C3,76 5,75 8,76 C11,75 13,76 16,75 C19,76 21,75 24,76 C27,75 29,76 32,74 C35,76 37,74 40,75 C43,73 45,75 48,72 C51,75 53,71 56,74 C59,70 61,73 64,69 C67,73 69,68 72,72 C75,67 77,71 80,66 C83,71 85,65 88,70 C91,63 93,69 96,62 C99,69 101,60 104,68 C107,58 109,66 112,55 C115,66 117,53 120,64 C123,51 125,62 128,49 C131,62 133,47 136,60 C139,45 141,58 144,43 C147,58 149,41 152,56 C155,39 157,54 160,37 C163,54 165,35 168,52 C171,33 173,50 176,31 C179,50 181,30 184,48 C187,28 189,46 192,26 C195,46 197,24 200,44 C203,22 205,42 208,20 C211,42 213,22 216,40 C219,20 221,38 224,24 C227,40 229,26 232,36 C235,24 237,34 240,28 C243,36 245,26 248,34 C251,24 253,32 256,26 C259,34 261,24 264,32 C267,22 269,30 272,24 C275,32 277,22 280,30 C283,20 285,28 288,22 C291,30 293,20 296,28 C299,18 301,26 304,20 C307,28 309,18 312,26 C315,16 317,24 320,18 C323,26 325,16 328,24 C331,14 333,22 336,16 C339,24 341,14 344,22 C347,12 349,20 352,15 C355,22 357,13 360,20 C363,12 365,18 368,14 C371,20 373,12 376,18 C379,10 381,16 384,12 C387,18 389,10 392,16 C395,10 397,14 400,12"
                      fill="none"
                      stroke="#5694FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Date labels */}
                <div className="flex justify-between text-white text-xs mt-2">
                  <span>12/2024</span>
                  <span>05/2025</span>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Mobile badges - inside container at bottom */}
          <div className="lg:hidden grid grid-cols-2 gap-3 mt-8">
            <div className="rounded-2xl px-3 py-2.5 flex items-center gap-2 badge-glass-up">
              <IconUp />
              <div>
                <p className="text-white font-semibold text-xs">+345 Nouveau Visiteurs</p>
                <p className="text-white/60 text-[10px]">dans les dernières 24h</p>
              </div>
            </div>
            <div className="rounded-2xl px-3 py-2.5 flex items-center gap-2 badge-glass-down">
              <IconDown />
              <div>
                <p className="text-white font-semibold text-xs">-47% Coût d'acquisition</p>
                <p className="text-white/60 text-[10px]">depuis la mise a jour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
