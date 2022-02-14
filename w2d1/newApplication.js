const calculateCart = require("./calculateCart");

const cart = [
  {
    name: "Wiggle",
    icon: "👹",
    price: 9.99,
  },
];

const output = calculateCart(cart, 0.88);

console.log(output);
