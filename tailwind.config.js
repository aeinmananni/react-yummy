/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './custom/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive']
      }
    }
  },
  plugins: [require('daisyui')]
};
