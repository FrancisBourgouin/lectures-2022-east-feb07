let francisFridge = {
  "🧀": 1,
  "🥔": 2,
  "🥛": 1,
  "🧋": 1,
  "🥦": 10,
};

const removeIngredient = (fridge, ingredient, successAction, failAction) => {
  setTimeout(() => {
    if (!fridge[ingredient] || fridge[ingredient] === 0) {
      return failAction();
    }

    fridge[ingredient] = fridge[ingredient] - 1;

    return successAction();
  }, 1500);
};

removeIngredient(
  francisFridge,
  "🧋",
  () => {
    removeIngredient(francisFridge, "🧋", () => {
      removeIngredient(
        francisFridge,
        "🧋",
        () => {
          removeIngredient(francisFridge, "🧋");
        },
        () => console.log("fridge error")
      );
    });
  },
  () => console.log("fridge error")
);
