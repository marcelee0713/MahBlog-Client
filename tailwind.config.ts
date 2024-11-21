import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config"; // Import the PluginAPI type

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4F4F4",
        text: "#393E41",
        accent: "#E6E6E6",

        yellowMode: {
          background: "#FDF6E3",
          text: "#393E41",
          accent: "#ECE2CE",
        },

        dark: {
          background: "#393E41",
          text: "#F4F4F4",
          accent: "#2E3437",
        },
      },
      fontFamily: {
        sourceSerif4: ["var(--font-source-serif-4)"],
        openSans: ["var(--font-open-sans)"],
      },
      animation: {
        animfadeAbove: "fadeAbove 1.2s ease-in",
        animfadeBelow: "fadeBelow 1.2s ease-in",
        animfadeLeftSide: "fadeLeftSide 1.2s ease-in",
        animfadeRightSide: "fadeRightSide 1.2s ease-in",
        animFullHeight: "fullHeight 1.2s ease-in",
        animFullWidth: "fullWidth 0.7s ease-in forwards",
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeAbove: {
          "100%": { transform: "translateY(0px)", opacity: "1" },
          "0%": {
            transform: "translateY(-15px)",
            opacity: "0",
          },
        },
        fadeBelow: {
          "100%": { transform: "translateY(0px)", opacity: "1" },
          "0%": {
            transform: "translateY(15px)",
            opacity: "0",
          },
        },
        fadeLeftSide: {
          "100%": { transform: "translateX(0px)", opacity: "1" },
          "0%": {
            transform: "translateX(-15px)",
            opacity: "0",
          },
        },
        fadeRightSide: {
          "100%": { transform: "translateX(0px)", opacity: "1" },
          "0%": {
            transform: "translateX(15px)",
            opacity: "0",
          },
        },
        fullHeight: {
          "100%": { height: "100%" },
          "0%": {
            height: "0px",
          },
        },
        fullWidth: {
          "100%": { width: "100%" },
          "0%": {
            width: "0px",
          },
        },
      },
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addVariant } = api;
      addVariant("yellow", ".yellow-mode &");
    },
  ],
} satisfies Config;
