/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Includes .jsx and .tsx files
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["light", "dark"], // DaisyUI themes
  // },
};
