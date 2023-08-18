module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ...],
      'serif': ['ui-serif', 'Georgia', ...],
      'mono': ['ui-monospace', 'SFMono-Regular', ...],
      'display': ['Oswald', ...],
      'body': ['"Open Sans"', ...],
    },
    container: {
      center: true,
      padding: "5px",
    },
    extend: {
      colors: {
        primary: "#292524",
        secondary: "#737373",
        stone1: "#57534e",
        navbarText: "#fafaf9",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};