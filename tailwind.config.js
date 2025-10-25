/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}",
    "./src/_includes/**/*.njk"
  ],
  theme: {
    extend: {
      colors: {
        // Final brand colors (Palette 1 - Modern Blue & Indigo)
        'brand-primary': '#2563eb', // Blue-600 - Professional, trustworthy
        'brand-secondary': '#4f46e5', // Indigo-600 - Sophisticated tech feel
        'brand-accent': '#f97316', // Orange-500 - Warm, energetic highlight
        'brand-light': '#eff6ff', // Light blue - Light backgrounds
        'brand-dark': '#1e40af', // Deep blue - Dark accents
        
        // Custom background colors (Palette 1 optimized)
        'bg-primary': '#ffffff', // Pure white background
        'bg-section': '#f8fafc', // Light blue-gray section background
        'bg-card': '#f1f5f9', // Light slate card background
        
        // Custom text colors (Palette 1 optimized)
        'text-primary': '#0f172a', // Dark slate text
        'text-secondary': '#475569', // Medium slate text
        'text-light': '#94a3b8', // Light slate text
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  darkMode: 'class',
}