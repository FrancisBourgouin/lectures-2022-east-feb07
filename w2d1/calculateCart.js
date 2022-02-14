const basicPriceRound = (price) => {
  return Math.round(price * 100) / 100;
};

// 1 = 10^0, 10 = 10^1,

const coolRound = (number, precision) => {
  const precisionValue = Math.pow(10, precision);

  return Math.round(number * precisionValue) / precisionValue;
};

const calculateCart = (cart, taxes) => {
  if (!cart || cart.length === 0) {
    throw new Error("Cart is empty");
  }

  if (!taxes) {
    throw new Error("No Tax Amount specified!");
  }

  let amountOfItems = 0;

  // Define a variable to contain the subtotal
  let subtotal = 0;
  // Iterate over the cart
  for (const cartItem of cart) {
    //  for each item of the cart, add the price to the subtotal variable
    if (cartItem.price) {
      subtotal += cartItem.price;
      amountOfItems++;
    }
  }

  const roundedSubtotal = basicPriceRound(subtotal);

  const taxAmount = subtotal * taxes;
  const roundedTaxAmount = basicPriceRound(taxAmount);

  const total = subtotal + taxAmount;
  const roundedTotal = basicPriceRound(total);

  // Define an empty array
  const itemList = [];
  // iterate over the cart
  for (const cartItem of cart) {
    // for every cart item, append the icon to the empty array
    if (cartItem.price) {
      itemList.push(cartItem.icon);
    }
  }

  const output = {
    amountOfItems,
    subtotal: roundedSubtotal,
    taxAmount: roundedTaxAmount,
    total: roundedTotal,
    itemList,
  };

  return output;
};

module.exports = calculateCart;
