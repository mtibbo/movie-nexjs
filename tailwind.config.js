module.exports = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        boxShadow: {
          '3xl': '0 35px 60px 10px rgba(0, 0, 0, 0.3)',
        },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
