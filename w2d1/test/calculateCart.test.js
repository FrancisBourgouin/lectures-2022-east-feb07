const { validCart, emptyCart, notACart, invalidCart } = require("../cartData");
const calculateCart = require("../calculateCart");
const { expect } = require("chai");
const bob = { a: 1, b: 2 };

// const a = bob.a;
// const b = bob.b;

const { a, b } = bob;

describe("calculateCart output when valid input", () => {
  it("should return an object", () => {
    const expectedResult = "object";
    const output = calculateCart(validCart, 0.14975);

    expect(output).to.be.an(expectedResult);
  });
  it("should return a valid amount of items", () => {
    const expectedResult = 4;
    const output = calculateCart(validCart, 0.14975);

    expect(output.amountOfItems).to.equal(expectedResult);
  });
  it("should return a valid subtotal", () => {
    const expectedResult = 205.47;
    const output = calculateCart(validCart, 0.14975);

    expect(output.subtotal).to.equal(expectedResult);
  });
  it("should return a valid amount of taxes", () => {
    const expectedResult = 30.77;
    const output = calculateCart(validCart, 0.14975);

    expect(output.taxAmount).to.equal(expectedResult);
  });
  it("should return a valid total", () => {
    const expectedResult = 236.24;
    const output = calculateCart(validCart, 0.14975);

    expect(output.total).to.equal(expectedResult);
  });
  it("should return a list of icons", () => {
    const expectedResult = ["🥔", "🐔", "🧀", "🧀"];
    const output = calculateCart(validCart, 0.14975);

    expect(output.itemList).to.deep.equal(expectedResult);
  });
});

describe("calculateCart with invalid parameters", () => {
  it("should throw an error when cart is empty", () => {
    const emptyCartFunction = () => calculateCart(emptyCart, 0.14975);

    expect(emptyCartFunction).to.throw();
  });
  it("should throw an error when cart not present", () => {
    const notACartFunction = () => calculateCart(notACart, 0.14975);

    expect(notACartFunction).to.throw();
  });
  it("should throw an error when tax not present", () => {
    const notACartFunction = () => calculateCart(validCart);

    expect(notACartFunction).to.throw();
  });
  it("should skip the item when there is an invalid item", () => {
    const output = calculateCart(invalidCart, 0.14975);

    const expectedResult = {
      amountOfItems: 2,
      subtotal: 5.49,
      taxAmount: 0.82,
      total: 6.31,
      itemList: ["🥔", "🐔"],
    };

    expect(output).to.deep.equal(expectedResult);
  });
});
