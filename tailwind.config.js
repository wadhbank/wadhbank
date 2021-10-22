module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class',
  theme: {
    screens: {
      xxl: "1440px",
      xl: { max: "1439px" },
      lg: { max: "1199px" },
      md: { max: "919px" },
      sm: { max: "767px" },
      xs: { max: "576px" },
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    lineHeight: {
      150: "150%",
      125: "125%",
    },

    colors: {
      black: {
        100: "#111828",
        80: "#384152",
        60: "#6B7380",
        50: "#9CA2AE",
        40: "#D1D4DB",
        30: "#E6E7EB",
        20: "#F3F4F6",
        10: "#F9FAFC",
      },
      red: {
        01: "#D91E18",
      },
      white: {
        100: "rgba(255, 255, 255, 1)",
        80: "rgba(255, 255, 255, 0.8)",
        60: "rgba(255, 255, 255, 0.6)",
        10: "rgba(255, 255, 255, 0.1)",
      },
      blue: {
        100: "#030E24",
        80: "#031B4B",
        70: "#002060",
        60: "#28437B",
        50: "#506695",
        40: "#788AB0",
        30: "#A0ADCA",
        20: "#C8D0E5",
        10: "#F0F3FF",
      },
    },
    gradients: (theme) => {
      return {
        "primary-base": [
          "309.7deg",
          theme("colors.blue.100"),
          theme("colors.blue.70"),
        ],
        "primary-hover": [
          "309.7deg",
          theme("colors.blue.80"),
          theme("colors.blue.60"),
        ],
        "primary-focus": [
          "309.7deg",
          theme("colors.blue.100"),
          theme("colors.blue.80"),
        ],
      };
    },

    extend: {
      transitionProperty: {
        "max-h": "max-height",
      },
      padding: {
        14: "14px",
        25: "100px",
      },
      width: {
        120: "120%",
      },
      borderRadius: {
        10: "10px",
      },
      typography: {
        "extra-small-regular": {
          css: {
            fontSize: "12px",
            fontWeight: 400,
            lineHeight: "150%",
          },
        },
        "extra-small-medium": {
          css: {
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "150%",
          },
        },
        "extra-small-bold": {
          css: {
            fontSize: "12px",
            fontWeight: 700,
            lineHeight: "125%",
          },
        },
        "small-regular": {
          css: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "150%",
          },
        },
        "small-medium": {
          css: {
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "150%",
          },
        },
        "small-bold": {
          css: {
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "125%",
          },
        },
        "normal-regular": {
          css: {
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "150%",
          },
        },
        "normal-medium": {
          css: {
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "150%",
          },
        },
        "normal-bold": {
          css: {
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "125%",
          },
        },
        "large-regular": {
          css: {
            fontSize: "20px",
            fontWeight: 400,
            lineHeight: "150%",
          },
        },
        "large-medium": {
          css: {
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "150%",
          },
        },
        "large-bold": {
          css: {
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "125%",
          },
        },
        "heading-6": {
          css: {
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "125%",
          },
        },
        "heading-5": {
          css: {
            fontSize: "32px",
            fontWeight: 700,
            lineHeight: "125%",
          },
        },
        "heading-4": {
          css: {
            fontSize: "40px",
            fontWeight: 700,
            lineHeight: "125%",
          },
        },
        "heading-3": {
          css: {
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "125%",
          },
        },
        "heading-1": {
          css: {
            fontSize: "60px",
            fontWeight: 700,
            lineHeight: "125%",
          },
        },
      },
    },
  },
  variants: {
    extends: {},
    backgroundColor: [
      "responsive",
      "dark",
      "group-hover",
      "focus-within",
      "hover",
      "focus",
      "active",
    ],
    gradients: ["hover", "active", "focus"],
  },
  plugins: [
    require("tailwindcss-plugins/gradients"),
    require("@tailwindcss/typography"),
  ],
};
