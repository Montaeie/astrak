'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Logo } from '../ui/Logo'
import { Button } from '../ui/Button'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  {
    label: 'À propos',
    href: '/a-propos',
    children: [
      { label: "L'agence", href: '/a-propos' },
      { label: 'Nos outils SEO', href: '/outils-seo' },
      { label: 'Témoignages', href: '/temoignages' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    label: 'Nos Expertises',
    href: '/expertises',
    children: [
      { label: 'Audit SEO Approfondie', href: '/expertises/audit-seo' },
      { label: 'Référencement ChatGPT', href: '/expertises/referencement-chatgpt' },
      { label: 'Agence E-reputation', href: '/expertises/e-reputation' },
      { label: 'Black Hat SEO', href: '/expertises/black-hat-seo' },
      { label: 'Netlinking', href: '/expertises/netlinking' },
    ],
  },
  {
    label: 'Secteurs favoris',
    href: '/secteurs',
    children: [
      { label: 'CBD', href: '/secteurs/cbd' },
      { label: 'IGaming', href: '/secteurs/igaming' },
    ],
  },
  {
    label: 'Étude de cas',
    href: '/etudes-de-cas',
    children: [
      { label: 'MyBrocante', href: '/etudes-de-cas/mybrocante' },
      { label: 'Nativus CBD', href: '/etudes-de-cas/nativus-cbd' },
      { label: 'Assistant Renov\'', href: '/etudes-de-cas/assistant-renov' },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F2FBFD] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-astrak-dark font-medium hover:text-cyan-dark transition-colors py-2">
                  {item.label}
                  {item.children && (
                    <svg
                      className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-astrak-dark hover:bg-astrak-gray transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button href="/contact" variant="primary">
              Prendre Rendez-vous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-astrak-dark"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F2FBFD]">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-astrak-dark font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </div>
            ))}
            <div className="pt-4">
              <Button href="/contact" variant="primary" className="w-full">
                Prendre Rendez-vous
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
