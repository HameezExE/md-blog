import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          // interactive and highlight elements
          DEFAULT: "#2563eb",
          dark: "#3b82f6",
        },
        background: {
          // page/container backgrounds
          light: "#ffffff",
          dark: "#0f172a",
        },
        foreground: {
          // main text: headings, navbar items
          light: "#333333",
          dark: "#f8fafc",
        },
        muted: {
          // secondary text
          light: "#64748b",
          dark: "#94a3b8",
        },
        border: {
          light: "#e2e8f0",
          dark: "#334155",
        },
        accent: {
          // highlights, tags, badges, code
          light: "#fbbf24",
          dark: "#facc15",
        },
        cardBg: {
          light: "#f1f5f9", // Tailwind slate‑100 – soft off‑white for subtle separation
          dark: "#1e293b", // Tailwind slate‑800 – darker slate to lift cards off a dark page
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
