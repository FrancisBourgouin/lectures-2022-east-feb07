const validCart = [
  {
    name: "Potato",
    icon: "🥔",
    price: 4.5,
  },
  {
    name: "Chicken",
    icon: "🐔",
    price: 0.99,
  },
  {
    name: "Cheese",
    icon: "🧀",
    price: 99.99,
  },
  {
    name: "Cheese",
    icon: "🧀",
    price: 99.99,
  },
];

const invalidCart = [
  {
    name: "Potato",
    icon: "🥔",
    price: 4.5,
  },
  {
    name: "Chicken",
    icon: "🐔",
    price: 0.99,
  },
  {
    name: "Cheese",
    icon: "🧀",
  },
];

const emptyCart = [];

const notACart = null;

module.exports = { validCart, invalidCart, emptyCart, notACart };
