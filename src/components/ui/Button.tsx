import React from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline-light'
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm md:text-base'

  const variants = {
    primary: 'bg-astrak-yellow text-astrak-dark hover:shadow-lg hover:-translate-y-0.5',
    secondary: 'bg-transparent border-2 border-astrak-dark text-astrak-dark hover:bg-astrak-dark hover:text-white',
    'outline-light': 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-astrak-dark',
  }

  const styles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
