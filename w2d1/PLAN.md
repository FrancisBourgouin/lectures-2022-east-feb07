# Shopping cart calculator

Function that will take in a cart structure, and will output another structure with subtotal, total, taxes, amount of items.

# Data

## Cart

```js
const cartItem1 = {
  name,
  icon,
  price,
};

const cartItem2 = {
  name,
  icon,
  price,
};

const cart = [cartItem1, cartItem2];
```

## CartItem

```js
const name = "Potato";
const icon = "🥔";
const price = 4.5;

const cartItem = {
  name,
  icon,
  price,
};
```

## Output

```js
const subtotal = 5;
const total = 10;
const taxes = 5;
const amountOfItems = 1;
const itemList = ["👻"];
// const output = [subtotal, total, taxes, amountOfItems] // [5,10,5,1]

const output = {
  subtotal,
  total,
  taxes,
  amountOfItems,
  itemList,
};
```

# Specifications

- function name: calculateCart
- parameters: cart array, tax integer
- output: calculatedCart object

```jsx
const output = calculateCart(cart, tax);
```

# Test Cases

- If no cart, return cart empty as a message
- If cart is an empty array, return cart empty as a message
- If cart has items, properly calculate the amount of items
- If cart has items, properly calculate the subtotal
- If cart has items, properly calculate the amount of taxes
- If cart has items, properly calculate the total
- If cart has items, properly output the short version of the cart (icons)
- If cart contains an invalid item, skip the item
- If no taxes, return tax empty as error
