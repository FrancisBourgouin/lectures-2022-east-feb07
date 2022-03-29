export const pickComputerChoice = (playerChoice) => {
  const choices = ["🗿", "🪓", "🌳"];
  if (!choices.includes(playerChoice)) {
    return "🦜";
  }

  const playerChoiceIndex = choices.indexOf(playerChoice);
  const computerChoiceIndex = (playerChoiceIndex + 2) % 3;

  return choices[computerChoiceIndex];
  // if (playerChoice === "🗿") {
  //   return "🌳";
  // }
  // if (playerChoice === "🪓") {
  //   return "🗿";
  // }
  // if (playerChoice === "🌳") {
  //   return "🪓";
  // }
};
