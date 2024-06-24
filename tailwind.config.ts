import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px 0px #D9D9D91A",
        custom2: "0px 4px 4px 0px #00000040",
        custom3: "-4px 8px 20px 0px #0000001A",
        custom4: "0px 4px 4px 0px #00000040",
        customInset: "0px 4px 4px 0px #00000040 inset",
        customInset2: "0px 4px 4px 0px #00000014 inset",
      },
      fontFamily: {
        wellfleet: ["Wellfleet", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
