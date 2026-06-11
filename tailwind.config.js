/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        display: [
          "Fraunces",
          "Iowan Old Style",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "serif"
        ]
      },
      colors: {
        pearl: "#f5f3ee",
        ink: "#14201f",
        graphite: "#293431",
        pine: "#0f3934",
        lagoon: "#1e7067",
        copper: "#bc7652",
        solar: "#e9b86c",
        mist: "#dce7df",
        celadon: "#9fc8b6"
      },
      boxShadow: {
        glass: "0 28px 80px rgba(20, 32, 31, 0.13)",
        command: "0 20px 70px rgba(15, 57, 52, 0.22)",
        quiet: "0 10px 30px rgba(20, 32, 31, 0.08)"
      },
      backgroundImage: {
        "soft-field":
          "linear-gradient(135deg, #f8f6f1 0%, #e9f0eb 48%, #f4eee5 100%)",
        "command-rail":
          "linear-gradient(165deg, #061f1f 0%, #0f3934 54%, #182c2a 100%)"
      }
    }
  },
  plugins: []
};
