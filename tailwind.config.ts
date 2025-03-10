/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate"

module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-geist-sans)',
                    ...fontFamily.sans
                ],
  			mono: [
  				'var(--font-geist-mono)',
                    ...fontFamily.mono
                ],
  			serif: [
  				'var(--font-domine-serif)',
                    ...fontFamily.serif
                ]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
} satisfies Config;
