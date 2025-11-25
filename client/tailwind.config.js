/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF3B30",
      },
      fontFamily: {
        poppinsBold: ["Poppins_700Bold"],
        poppinsSemiBold: ["Poppins_600SemiBold"],
        interRegular: ["Poppins_400Regular"],
        interMedium: ["Poppins_500Medium"],
        interLight: ["Poppins_300Light"],
        interBold: ["Inter_700Bold"],
        interSemiBold: ["Inter_600SemiBold"],
      },
    },
  },
  plugins: [],
};
