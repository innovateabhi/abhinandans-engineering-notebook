/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#F6F3E9',
          light: '#FCFAF4',
          warm: '#F1EDE0',
          secondary: '#E9ECDD',
          dark: '#E2DEC9',
        },
        ink: {
          DEFAULT: '#26382F',
          light: '#3D5246',
          muted: '#526354',
          faint: '#7A8C7E',
        },
        sage: {
          DEFAULT: '#69816D',
          light: '#8FA593',
          dark: '#4C6150',
          tint: '#DDE5DE',
        },
        accent: {
          DEFAULT: '#C57550',
          light: '#D98F6C',
          dark: '#A65A37',
          tint: '#F7E7DE',
        },
        grid: {
          line: '#D8D8CC',
          dark: '#C8C8BB',
          light: '#E6E6DC',
        },
        margin: {
          red: '#D97768',
          sage: '#8BA18F',
        }
      },
      fontFamily: {
        editorial: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        hand: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'paper-sm': '0 1px 3px rgba(38, 56, 47, 0.08), 0 1px 2px rgba(38, 56, 47, 0.04)',
        'paper': '0 4px 12px rgba(38, 56, 47, 0.08), 0 1px 3px rgba(38, 56, 47, 0.06)',
        'paper-lg': '0 10px 25px -5px rgba(38, 56, 47, 0.1), 0 8px 10px -6px rgba(38, 56, 47, 0.06)',
        'paper-lift': '0 14px 28px rgba(38, 56, 47, 0.12), 0 10px 10px rgba(38, 56, 47, 0.08)',
        'inner-paper': 'inset 0 2px 4px 0 rgba(38, 56, 47, 0.06)',
      },
      borderWidth: {
        '1.5': '1.5px',
      }
    },
  },
  plugins: [],
}
