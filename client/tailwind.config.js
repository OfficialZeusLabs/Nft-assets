/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFC72C",
        sidebar: "#130712",
        primaryBg: "#0A0409",
        header: "#1B0A1A",
      },
      screens: {
        mobile: "360px",
        tablet: "580px",
        tablet_l: "650px",
        laptop: "780px",
        laptop_l: "1000px",
        desktop: "1020px",
        xl: "1400px",
      },
      backgroundImage: {
        "gradient-linear": "linear-gradient(135deg, #702D6C, #FFC72C)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        orbitron: ["var(--font-orbitron)"],
      },
    },
  },
  plugins: [],
};
