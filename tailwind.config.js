/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs principales Astrak
        astrak: {
          dark: '#0F0F3D',
          yellow: '#FFEF5E',
          white: '#FFFFFF',
          gray: '#F5F7FA',
        },
        // Dégradé Cyan
        cyan: {
          light: '#79F2EC',
          dark: '#468C89',
        },
        // Couleurs Google Search Console
        gsc: {
          blue: '#5694FF',
          violet: '#A16CFF',
          'violet-dark': '#734BB9',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial-cyan': 'radial-gradient(circle, #79F2EC 0%, #468C89 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0F0F3D 0%, #1a1a4e 100%)',
      },
      borderRadius: {
        'pill': '9999px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(15, 15, 61, 0.08)',
        'card-hover': '0 8px 30px rgba(15, 15, 61, 0.12)',
      },
    },
  },
  plugins: [],
}
