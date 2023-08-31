/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      container: {
        // you can configure the container to be centered
        center: true,
  
        // or have default horizontal padding
        padding: '1rem',
  
        // default breakpoints but with 40px removed
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1240px',
        },
      },
      colors: {
        primary: "#7e22ce",
        primary_2: "#692c90",
        primary_3: "#f4f3fb"
      },
      fontFamily: {
        main: "Inter"
      },
      width: {
        '168': 168
      }
    },
  },
  plugins: [],
}
