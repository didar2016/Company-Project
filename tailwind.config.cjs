module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2b2a59',
          light: '#5b6abf'
        },
        accent: '#00a7c6'
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
};
