/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'spin': 'spin 2s linear infinite',
       },
       keyframes: {
         spin: {
           '0%': { transform: 'rotate(0deg)' },
           '100%': { transform: 'rotate(360deg)' },
         },
       },
    },
    screens: {
      'sm': '800px',
      // => @media (min-width: 640px) { ... }

      'md': '1200px',
      // => @media (min-width: 768px) { ... }
    }
  },
  plugins: [],
}
