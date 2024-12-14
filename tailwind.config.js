/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#198e88',
          '50': '#e6f3f2',
          '100': '#b3e0dc',
          '200': '#80cdc6',
          '300': '#4dbab0',
          '400': '#1aa79a',
          '500': '#198e88',
          '600': '#167d78',
          '700': '#136c68',
          '800': '#105b58',
          '900': '#0d4a48'
        }
      }
    },
  },
  plugins: [],
}
