import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'red-900': '#9b1c1e',
        backgroundImage: {
          'double-bg': 'url("/Rectangle_1.png"), url("/Rectangle_2.png")',
        },
         keyframes: {
        slideRightToLeft: {
          '0%': { transform: 'translateX(400%)' },
          '100%': { transform: 'translateX(-400%)' },
        },
        slideLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideUpToDown: {
          '0%': { transform: 'translateY(-200%)' },
          '100%': { transform: 'translateY(200%)' },
        },
        slideDownToUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideRightToLeft: 'slideRightToLeft 2s ease-in-out infinite',
        slideLeftToRight: 'slideLeftToRight 2s ease-in-out infinite',
        slideUpToDown: 'slideUpToDown 2s ease-in-out infinite',
        slideDownToUp: 'slideDownToUp 2s ease-in-out infinite',
      },
        
        
      },
    },
  },


  plugins: [],
};
export default config;
