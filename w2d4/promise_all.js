// const somePromise = () => {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve();
//     } else {
//       reject();
//     }
//   });
// };

// const bob = somePromise()
//   .then(() => console.log("YAY", bob))
//   .catch(() => console.log("NAY", bob));

// console.log(bob);

// // Axios is a promise based data fetcher, that will return a response.

// axios.get("http://google.com").then(response => ...).catch(error => console.log(error))

let francisFridge = {
  "🧀": 1,
  "🥔": 2,
  "🥛": 1,
  "🧋": 1,
  "🥦": 5,
};

const removeIngredient = (fridge, ingredient, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!fridge[ingredient] || fridge[ingredient] === 0) {
        return reject();
      }

      fridge[ingredient] = fridge[ingredient] - 1;

      return resolve();
    }, time);
  });
};

const sarah = removeIngredient(francisFridge, "🥦", 500);
const alex = removeIngredient(francisFridge, "🧋", 1500);
const alien = removeIngredient(francisFridge, "🧋", 0);

// Promise.race([sarah, alex, alien]).then(() => console.log(francisFridge));
Promise.all([sarah, alex, alien])
  .then(() => console.log(francisFridge))
  .catch(() => console.log("OH NO."));
