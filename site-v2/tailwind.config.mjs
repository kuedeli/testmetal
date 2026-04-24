/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0C0A09',
          800: '#161311',
          700: '#1C1917',
          600: '#292524',
          500: '#3F3A37',
          400: '#5A524E',
        },
        bone: {
          50:  '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#A8A29E',
          400: '#78716C',
        },
        ember: {
          50:  '#FFEDD5',
          100: '#FED7AA',
          200: '#FB923C',
          300: '#EA580C',
          400: '#C2410C',
          500: '#9A3412',
        },
        brass: {
          100: '#EAB308',
          200: '#CA8A04',
          300: '#A16207',
          400: '#854D0E',
          500: '#713F12',
        },
        steel: {
          100: '#D6D3D1',
          200: '#A8A29E',
          300: '#57534E',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
        serif:   ['"Source Serif 4"', 'ui-serif', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans:    ['"Source Serif 4"', 'ui-serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 10vw, 9rem)',  { lineHeight: '0.88', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2.75rem, 7vw, 6.5rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 4rem)',      { lineHeight: '0.95', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.5rem)',  { lineHeight: '1.1', letterSpacing: '-0.005em' }],
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.28em',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'page': '1440px',
        'copy': '64ch',
      },
      boxShadow: {
        'ember':  '0 20px 80px -20px rgba(234, 88, 12, 0.45)',
        'brass':  '0 18px 60px -20px rgba(161, 98, 7, 0.4)',
        'deep':   '0 30px 80px -30px rgba(0, 0, 0, 0.7)',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '45%': { opacity: '0.82' },
          '55%': { opacity: '1' },
          '72%': { opacity: '0.94' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        blobDrift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%':      { transform: 'translate(4%, -3%) scale(1.08)' },
          '66%':      { transform: 'translate(-3%, 4%) scale(0.94)' },
        },
      },
      animation: {
        flicker: 'flicker 4.5s ease-in-out infinite',
        'rise-in': 'riseIn 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'draw-line': 'drawLine 1.4s cubic-bezier(0.77, 0, 0.175, 1) both',
        'blob-drift': 'blobDrift 22s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
