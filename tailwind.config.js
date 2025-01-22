/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "ibm-regular": ["IBMPlexSans_400Regular"],
        "ibm-medium": ["IBMPlexSans_500Medium"],
        "ibm-semibold": ["IBMPlexSans_600SemiBold"],
        "ibm-bold": ["IBMPlexSans_700Bold"],
      },
    },
  },
  plugins: [],
};
