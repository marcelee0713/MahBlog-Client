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
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const { addVariant } = api;
      addVariant("yellow", ".yellow-mode &");
    },
  ],
} satisfies Config;
