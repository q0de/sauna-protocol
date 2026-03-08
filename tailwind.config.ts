import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-newsreader)', 'Newsreader', 'serif'],
        body: ['var(--font-noto-sans)', 'Noto Sans', 'sans-serif'],
        sans: ['var(--font-noto-sans)', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        primary: '#f26c0d',
        "background-light": "#f8f7f5",
        "background-dark": "#231810",
        "wood-dark": "#1a120b",
        "wood-medium": "#342418",
        "wood-light": "#493222",
        "card-dark": "#2e2118",
        "surface-dark": "#342418",
        "surface-dark-hover": "#422e20",
        "text-muted": "#cba990",
        "text-secondary": "#cba990",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        full: "9999px",
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

