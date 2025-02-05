import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        robotoSlab: ["var(--font-Roboto_Slab)"],
      },
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
  },
  plugins: [],
} satisfies Config;
