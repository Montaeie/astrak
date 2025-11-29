import React from 'react'
import Link from 'next/link'
import { Logo } from '../ui/Logo'

const footerLinks = {
  'A propos': [
    { label: "L'agence", href: '/a-propos' },
    { label: 'Nos outils SEO', href: '/outils-seo' },
    { label: 'Témoignages', href: '/temoignages' },
    { label: 'Blog', href: '/blog' },
  ],
  'Nos Expertises': [
    { label: 'Audit SEO Approfondie', href: '/expertises/audit-seo' },
    { label: 'Référencement ChatGPT', href: '/expertises/referencement-chatgpt' },
    { label: 'Agence E-reputation', href: '/expertises/e-reputation' },
    { label: 'Black Hat SEO', href: '/expertises/black-hat-seo' },
    { label: 'Netlinking', href: '/expertises/netlinking' },
  ],
  'Etude de cas': [
    { label: 'MyBrocante', href: '/etudes-de-cas/mybrocante' },
    { label: 'Nativus CBD', href: '/etudes-de-cas/nativus-cbd' },
    { label: "Assistant Renov'", href: '/etudes-de-cas/assistant-renov' },
  ],
  'Secteurs favoris': [
    { label: 'CBD', href: '/secteurs/cbd' },
    { label: 'IGaming', href: '/secteurs/igaming' },
  ],
}

const socialLinks = [
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com/astrak',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/astrak',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/astrak',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="bg-astrak-dark text-white rounded-t-3xl">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-light transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo & Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <Logo variant="light" />
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
                <Link href="/carrieres" className="hover:text-white transition-colors">
                  Travailler chez Astrak
                </Link>
                <Link href="/cgu" className="hover:text-white transition-colors">
                  Conditions générales d'utilisation
                </Link>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions legales
                </Link>
                <span>© Astrak</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
