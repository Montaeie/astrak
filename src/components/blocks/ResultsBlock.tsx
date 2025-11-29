import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ResultsBlock, Media } from '@/payload-types'

// Fallback icons for each client
function IconMyBrocante() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="12" width="36" height="28" rx="3" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <path d="M6 20h36" stroke="#0F0F3D" strokeWidth="2"/>
      <circle cx="16" cy="32" r="4" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <circle cx="32" cy="32" r="4" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <path d="M20 32h8" stroke="#0F0F3D" strokeWidth="2"/>
      <path d="M24 8v4" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function IconNativusCBD() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 6c-6 8-12 14-12 22a12 12 0 0024 0c0-8-6-14-12-22z" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <path d="M24 18v16M18 26h12" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function IconAssistantRenov() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24l16-14 16 14" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 22v18h24V22" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="20" y="30" width="8" height="10" stroke="#0F0F3D" strokeWidth="2" fill="none"/>
      <path d="M30 16l6-2v8" stroke="#0F0F3D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// Map client names to icons
const clientIconMap: Record<string, React.ReactNode> = {
  'mybrocante': <IconMyBrocante />,
  'nativus cbd': <IconNativusCBD />,
  'nativus': <IconNativusCBD />,
  'assistant rénov': <IconAssistantRenov />,
  'assistant renov': <IconAssistantRenov />,
}

function getClientIcon(clientName: string): React.ReactNode | null {
  const normalized = clientName.toLowerCase().trim()
  return clientIconMap[normalized] || null
}

interface ResultsBlockRendererProps {
  block: ResultsBlock
}

export function ResultsBlockRenderer({ block }: ResultsBlockRendererProps) {
  const heading = block.heading || "Nos réussites parlent d'elles-mêmes"
  const results = block.results || []

  if (results.length === 0) {
    return null
  }

  return (
    <section className="py-20 md:py-28 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-astrak-dark">
            {heading}
          </h2>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result, index) => {
            const icon = result.icon as Media | undefined
            const fallbackIcon = getClientIcon(result.client)

            return (
              <div
                key={result.id || index}
                className="bg-white text-center p-8 md:p-10 rounded-3xl shadow-sm"
              >
                {/* Icon - uploaded or fallback */}
                <div className="flex justify-center mb-6">
                  {icon?.url ? (
                    <Image
                      src={icon.url}
                      alt={result.client}
                      width={48}
                      height={48}
                      className="w-12 h-12"
                    />
                  ) : fallbackIcon ? (
                    fallbackIcon
                  ) : null}
                </div>

                <p className="text-astrak-dark font-medium mb-6">{result.client}</p>

                <p className="text-3xl md:text-4xl font-bold text-astrak-dark mb-2">
                  {result.stat}
                </p>

                <p className="text-gray-500 text-sm mb-8">{result.label}</p>

                {result.href && (
                  <Link
                    href={result.href}
                    className="text-astrak-dark font-medium text-sm underline underline-offset-4 hover:text-cyan-dark transition-colors"
                  >
                    Découvrir l'étude de cas
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
