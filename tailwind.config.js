
// tailwind.config.js
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./*.html",
    "./_posts/*.md"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Pretendard'", "sans-serif"],
      },
      colors: {
        primary: {
          red: "#FF453A",
          yellow: "#FFD60A",
          blue: "#0A84FF",
        },
        gray: {
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        }
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        full: "9999px"
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        26: "6.5rem"
      }
    },
  },
  plugins: [],
}
