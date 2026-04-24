/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0B0B0C',
          800: '#141416',
          700: '#1C1C1F',
          600: '#2A2A2E',
          500: '#3A3A40',
          400: '#55565B',
        },
        bone: {
          50:  '#F6F3ED',
          100: '#ECE7DC',
          200: '#D7CEBC',
          300: '#B9AD95',
          400: '#8E8269',
        },
        ember: {
          50:  '#FFE9D6',
          100: '#FFC893',
          200: '#FB9949',
          300: '#E8630A',   // primary fire
          400: '#C44B00',   // deep ember
          500: '#8A3100',   // charred
        },
        patina: {
          100: '#C9A46B',   // warm gold
          200: '#A77F3E',   // brass
          300: '#7A5727',   // rust patina
        },
        steel: {
          100: '#B8BCC3',
          200: '#8B8E94',
          300: '#5A5D64',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans:    ['"Manrope"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 9vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.75rem, 6.5vw, 5.25rem)', { lineHeight: '1.0', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.5rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.005em' }],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'page': '1440px',
        'copy': '68ch',
      },
      boxShadow: {
        'ember': '0 20px 60px -20px rgba(232, 99, 10, 0.35)',
        'deep':  '0 30px 80px -30px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.85' },
          '55%': { opacity: '1' },
          '72%': { opacity: '0.92' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        flicker: 'flicker 4.5s ease-in-out infinite',
        'rise-in': 'riseIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'draw-line': 'drawLine 1.2s cubic-bezier(0.77, 0, 0.175, 1) both',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.9  0 0 0 0 0.85  0 0 0 0 0.78  0 0 0 0.12 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      },
    },
  },
  plugins: [],
};
