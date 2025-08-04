module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Trust anchor + CTA power
        primary: {
          DEFAULT: "#1ac8db", // cyan-400
          50: "#ecfeff", // cyan-50
          100: "#cffafe", // cyan-100
          200: "#a5f3fc", // cyan-200
          300: "#67e8f9", // cyan-300
          400: "#1ac8db", // cyan-400
          500: "#06b6d4", // cyan-500
          600: "#0891b2", // cyan-600
          700: "#0e7490", // cyan-700
          800: "#155e75", // cyan-800
          900: "#164e63", // cyan-900
        },
        
        // Secondary Colors - Professional authority
        secondary: {
          DEFAULT: "#000000", // black
          50: "#f9fafb", // gray-50
          100: "#f3f4f6", // gray-100
          200: "#e5e7eb", // gray-200
          300: "#d1d5db", // gray-300
          400: "#9ca3af", // gray-400
          500: "#6b7280", // gray-500
          600: "#4b5563", // gray-600
          700: "#374151", // gray-700
          800: "#1f2937", // gray-800
          900: "#111827", // gray-900
        },
        
        // Accent Colors - Conversion moments only
        accent: {
          DEFAULT: "#6ce5e8", // cyan-300
          50: "#ecfeff", // cyan-50
          100: "#cffafe", // cyan-100
          200: "#a5f3fc", // cyan-200
          300: "#6ce5e8", // cyan-300
          400: "#22d3ee", // cyan-400
          500: "#06b6d4", // cyan-500
        },
        
        // Background Colors
        background: "#ffffff", // white
        surface: "#f8fafc", // slate-50
        
        // Text Colors
        text: {
          primary: "#1f2937", // gray-800
          secondary: "#6b7280", // gray-500
        },
        
        // Status Colors
        success: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
          500: "#10b981", // emerald-500
          600: "#059669", // emerald-600
        },
        
        warning: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
        },
        
        error: {
          DEFAULT: "#ef4444", // red-500
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
          500: "#ef4444", // red-500
          600: "#dc2626", // red-600
        },
        
        // Border Colors
        border: {
          DEFAULT: "#e5e7eb", // gray-200
          light: "#f3f4f6", // gray-100
        },
      },
      
      fontFamily: {
        // Headlines - Bold impact for 3-second value communication
        montserrat: ['Montserrat', 'sans-serif'],
        // Body - Effortless reading for case studies and benefits
        inter: ['Inter', 'sans-serif'],
        // Default sans fallback
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      
      fontSize: {
        // Custom font sizes for landing page hierarchy
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section-title': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'subsection': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'body-large': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'cta': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
      },
      
      boxShadow: {
        // Custom shadows for conversion-focused elements
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1)', // Client logo cards
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // CTA buttons
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.1)', // Elevated elements
      },
      
      animation: {
        // Custom animations for engagement
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      
      transitionDuration: {
        '250': '250ms',
        '300': '300ms',
      },
      
      transitionTimingFunction: {
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      spacing: {
        // Custom spacing for landing page sections
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      maxWidth: {
        // Custom max widths for content containers
        '8xl': '88rem',
        '9xl': '96rem',
      },
      
      borderRadius: {
        // Custom border radius for modern feel
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
  ],
}