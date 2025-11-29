import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'cyan' | 'yellow' | 'dark'
  className?: string
}

export function Badge({ children, variant = 'cyan', className = '' }: BadgeProps) {
  const variants = {
    cyan: 'bg-cyan-light/20 text-cyan-dark border-cyan-light/30',
    yellow: 'bg-astrak-yellow/20 text-astrak-dark border-astrak-yellow/30',
    dark: 'bg-astrak-dark/10 text-astrak-dark border-astrak-dark/20',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
