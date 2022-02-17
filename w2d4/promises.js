let francisFridge = {
  "🧀": 1,
  "🥔": 2,
  "🥛": 1,
  "🧋": 1,
  "🥦": 5,
};

const removeIngredient = (fridge, ingredient) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!fridge[ingredient] || fridge[ingredient] === 0) {
        return reject();
      }

      fridge[ingredient] = fridge[ingredient] - 1;

      return resolve();
    }, 1500);
  });
};

const showFridgeContent = (fridge) => console.log(fridge);

console.log("START INGREDIENT REMOVAL");

removeIngredient(francisFridge, "🥦")
  .then(() => {
    showFridgeContent(francisFridge);
    return removeIngredient(francisFridge, "🥦");
  })
  .then(() => {
    showFridgeContent(francisFridge);
    return removeIngredient(francisFridge, "🥦");
  })
  .then(() => {
    showFridgeContent(francisFridge);
    return removeIngredient(francisFridge, "🥦");
  })
  .catch(() => console.log("fridge error"))
  .finally(() => {
    console.log("FINISHED INGREDIENT REMOVAL");
  });

// removeIngredient(francisFridge, "🥦")
//   .then(() => {
//     showFridgeContent(francisFridge);
//     removeIngredient(francisFridge, "🥦")
//       .then(() => {
//         showFridgeContent(francisFridge);
//         removeIngredient(francisFridge, "🥦")
//           .then(() => {
//             showFridgeContent(francisFridge);
//           })
//           .catch(() => console.log("fridge error"));
//       })
//       .catch(() => console.log("fridge error"));
//   })
//   .catch(() => console.log("fridge error"));
