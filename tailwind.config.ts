import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans Variable", "system-ui", "sans-serif"],
        heading: ["Nunito Variable", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;