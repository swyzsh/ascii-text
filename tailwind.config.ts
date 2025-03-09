/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        serif: ["var(--font-domine-serif)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
