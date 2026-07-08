/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          // Primary Colors
          navy: '#062F3A',      // Very Dark Navy
          blue: '#062F3A',      // Deep Blue
          teal: '#00A6B4',      // Teal / Cyan
          lightCyan: '#26C6DA', // Light Cyan
          orange: '#FF9F1C',    // Orange/Yellow

          // Secondary Colors
          secBlue: '#1E88E5',
          secTeal: '#14B8A6',
          secPurple: '#7C3AED',
          secTurq: '#00D4C1',
          
          // Accent
          accent: '#FF6B35',    // Vibrant Orange/Red

          // Neutrals (for backgrounds and text)
          slateDark: '#0F172A', // Slate Dark
          slateGray: '#334155', // Slate Gray
          slateLight: '#64748B',// Slate Light
          lightGrayBlue: '#CBD5E1', 
          veryLightGray: '#E2E8F0',
          bgBase: '#F8FAFC',    // Off-white Background
          
          // Legacy fallbacks and original names (to prevent crashing)
          primary: '#062F3A',    // Same as navy
          secondary: '#00A6B4',  // Same as teal
          blue: '#062F3A',       // Same as blue
          cyan: '#26C6DA',       // Same as lightCyan
          orange: '#FF9F1C',     // Same as orange
          dark: '#062F3A',       // Same as navy
          light: '#F8FAFC',      // Same as bgBase
          gray: '#64748B',       // Same as slateLight
          border: '#E2E8F0',     // Same as veryLightGray
          
          darkest: '#F8FAFC',    // Mapped to light background
          deepNavy: '#FFFFFF',   // Mapped to white
          navyBorder: '#E2E8F0', // Mapped to very light gray
          textPrimary: '#0F172A',
          textMuted: '#64748B',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #E5E7EB, #00A6B4)',
        'gradient-cyan': 'linear-gradient(to right, #00A6B4, #26C6DA)',
        'gradient-orange': 'linear-gradient(to right, #E5E7EB, #FF9F1C)',
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 40px -10px rgba(0,0,0,0.12)',
        'btn': '0 4px 14px rgba(255, 159, 28, 0.4)',
        '2d': '4px 4px 0px 0px rgba(11,29,52,1)',
        '2d-hover': '2px 2px 0px 0px rgba(11,29,52,1)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
