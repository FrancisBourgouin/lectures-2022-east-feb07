const someFunction = (a, b) => {
  const newA = Number(a);
  const newB = Number(b);

  return newA * newB;
};

const result1 = someFunction(5, 5); // 25
const result2 = someFunction(6, 5); // 30
const result3 = someFunction(7, 5); // 35
const result4 = someFunction(); // NaN

console.log(result1, result2, result3, result4);
