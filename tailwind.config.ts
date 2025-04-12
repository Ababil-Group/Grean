import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        "hero-bg": "url('/images/22.jpg')",
        "why-bg": "url('/why.png')",
        "values-bg": "url('/images/33.jpg')",
      },
      colors: {
        primary: "#005750",
        secondary: "#B59752",
      },
    },
  },
  plugins: [tailwindAnimate],
} satisfies Config;
