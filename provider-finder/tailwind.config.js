module.exports = {
  purge: false,
  darkMode: "class", // or 'media' or 'class'
  theme: {
    // ...
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    minHeight: (theme) => ({
      0: "0",
      ...theme("spacing"),
      full: "100%",
      screen: "calc(var(--vh) * 100)",
    }),
    // ...
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
