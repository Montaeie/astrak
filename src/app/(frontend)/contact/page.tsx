import React from 'react'
import Image from 'next/image'
import { Header, Footer } from '@/components/layout'

export const metadata = {
  title: 'Contact - Réserve ton diagnostic SEO gratuit | Astrak',
  description: 'Réserve dès maintenant un créneau pour échanger avec un membre de l\'équipe Astrak et faire le point sur ton SEO gratuitement.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Main Section */}
        <section className="py-20 bg-astrak-gray min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Text */}
              <div className="lg:pt-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-astrak-dark mb-8 leading-tight">
                  Reserve ton<br />
                  diagnostic<br />
                  <span className="gradient-text">gratuit</span>
                </h1>

                <p className="text-lg text-gray-700 mb-6">
                  Réserve dès maintenant un créneau pour échanger avec un membre de l'équipe Astrak et faire le point sur ton SEO gratuitement.
                </p>

                <p className="text-gray-600 mb-4">
                  Vous pouvez également nous contacter par email à l'adresse:
                </p>

                <a
                  href="mailto:contact@astrak.fr"
                  className="text-astrak-dark font-semibold underline hover:text-cyan-dark transition-colors"
                >
                  contact@astrak.fr
                </a>
              </div>

              {/* Right Column - Calendar Widget */}
              <div className="bg-white rounded-3xl shadow-card overflow-hidden">
                {/* Calendar Header */}
                <div className="bg-astrak-dark p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center bg-cyan-light/20">
                        <span className="text-white font-bold text-xl">L</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        Décollage SEO avec Leo
                      </h3>
                    </div>
                  </div>

                  {/* Month Navigation */}
                  <div className="flex items-center justify-center gap-4 text-white">
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <span className="font-semibold">October 2025</span>
                    <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Days of Week */}
                  <div className="grid grid-cols-7 gap-2 mt-4 text-center text-sm text-white/60">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day) => (
                      <div key={day}>{day}</div>
                    ))}
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mt-2">
                    {/* Empty cells for days before month starts */}
                    {[...Array(3)].map((_, i) => (
                      <div key={`empty-${i}`} />
                    ))}
                    {/* Days of month */}
                    {[...Array(31)].map((_, i) => {
                      const day = i + 1
                      const isSelected = day === 27
                      const isWeekend = (i + 3) % 7 === 0 || (i + 3) % 7 === 6
                      return (
                        <button
                          key={day}
                          className={`p-2 rounded-full text-sm transition-colors ${
                            isSelected
                              ? 'bg-white text-astrak-dark font-semibold'
                              : isWeekend
                              ? 'text-white/40'
                              : 'text-white hover:bg-white/10'
                          }`}
                        >
                          {day}
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Time Selection */}
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-astrak-dark font-semibold mb-3">How long do you need?</p>
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 px-4 rounded-xl border-2 border-astrak-dark bg-astrak-gray text-astrak-dark font-semibold transition-colors">
                        30 mins
                      </button>
                      <button className="flex-1 py-3 px-4 rounded-xl border-2 border-gray-200 text-gray-600 hover:border-astrak-dark transition-colors">
                        45 mins
                      </button>
                    </div>
                  </div>

                  <div>
                    <p className="text-astrak-dark font-semibold mb-2">What time works best?</p>
                    <p className="text-gray-500 text-sm mb-2">Showing times for October 27, 2025</p>
                    <p className="text-cyan-dark text-sm mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-cyan-light rounded-full"></span>
                      UTC +07:00 Indochina Time
                    </p>

                    <div className="space-y-2">
                      <button className="w-full py-3 px-4 rounded-xl border-2 border-gray-200 text-astrak-dark hover:border-astrak-dark hover:bg-astrak-gray transition-all">
                        11:55 am
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
