// What is it ?

// Function inside a function ? (YES AND NO)
// Function passed as an argument to another function ?
// Something very complicated

const fancyRound = (value, precision) => {
  const precisionDivider = Math.pow(10, precision);

  return Math.round(value * precisionDivider) / precisionDivider;
};

const fancyRound2 = (value, precision) =>
  Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);

const repeatACoupleOfTimes = (action, amount) => {
  for (let i = 0; i < amount; i++) {
    action();
  }
};

const hello = () => console.log("hello");

repeatACoupleOfTimes(hello, 5);

repeatACoupleOfTimes(() => console.log("Wiggle"), 5);

const someSum = (a, b) => a + b;

someSum(5, 5);
