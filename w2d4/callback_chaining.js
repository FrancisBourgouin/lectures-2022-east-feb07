let francisFridge = {
  "🧀": 1,
  "🥔": 2,
  "🥛": 1,
  "🧋": 1,
  "🥦": 10,
};

const removeIngredient = (fridge, ingredient, thenDoSomething) => {
  setTimeout(() => {
    if (!fridge[ingredient] || fridge[ingredient] === 0) {
      return thenDoSomething(false);
    }

    fridge[ingredient] = fridge[ingredient] - 1;

    thenDoSomething(true);
  }, 1500);
};

const addIngredient = (fridge, ingredient) => {
  setTimeout(() => {
    if (fridge[ingredient]) {
      fridge[ingredient] = fridge[ingredient] + 1;
    } else {
      fridge[ingredient] = 1;
    }
  }, 1500);
};

const bob = () => console.log("bob");
const bob2 = console.log("bob");

// removeIngredient(francisFridge, "👻",function(){ console.log(francisFridge)})

removeIngredient(francisFridge, "🧀", (success) => {
  console.log(francisFridge);
  if (success) {
    removeIngredient(francisFridge, "🧀", (success) => {
      if (success) {
        console.log(francisFridge);
      } else {
        console.log("error in the fridge");
      }
    });
  } else {
    console.log("error in the fridge");
  }
});

// try {
//   throw new Error("OMG");
// } catch (error) {
//   console.log("OH NO.");
// }
