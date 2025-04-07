import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          dark: "#3b82f6",
        },
        background: {
          light: "#ffffff",
          dark: "#0f172a",
        },
        foreground: {
          light: "#0f172a",
          dark: "#f8fafc",
        },
        muted: {
          light: "#64748b",
          dark: "#94a3b8",
        },
        border: {
          light: "#e2e8f0",
          dark: "#334155",
        },
        accent: {
          light: "#fbbf24",
          dark: "#facc15",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
