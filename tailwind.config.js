/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAFAFA',    // Premium Off-White
        'grid-line': '#FF5A24', // Subtle dark grid lines
        'accent-orange': '#FF5A24', // Oranex Orange
        'surface': '#FFFFFF',     // White cards
        'surface-highlight': '#F4F4F5', // Zinc-100 hover
        'text-primary': '#18181B', // Zinc-950
        'text-secondary': '#71717A', // Zinc-500
        // Keeping some existing colors just in case
        'primary': '#FF5A24',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 80s linear infinite',
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