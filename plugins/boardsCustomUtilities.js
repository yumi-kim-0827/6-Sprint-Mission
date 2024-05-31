module.exports = function ({ addUtilities }) {
  const newUtilities = {
    ".rounded-bottom": {
      borderRadius: "0 0 32px 32px",
    },
  };
  addUtilities(newUtilities, ["responsive", "hover"]);
};
