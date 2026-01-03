/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',    // Obsidian Black
        'accent-purple': '#8B5CF6', // Vibranium Purple
        'vibranium': '#8B5CF6',
        'true-black': '#000000',
        'surface': '#0A0A0A',     // Deep Zinc
        'text-primary': '#FFFFFF',
        'text-secondary': '#A1A1AA', // Zinc-400
        'brand-purple': '#8B5CF6',
        'obsidian': '#050505',
      },
      borderRadius: {
        'none': '0px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Clash Display"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-white': 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}