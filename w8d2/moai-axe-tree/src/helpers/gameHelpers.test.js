import { pickComputerChoice } from "./gameHelpers";

describe("pickComputerChoice function tests", () => {
  it("should give the opposite value based on the player choice", () => {
    const playerChoice1 = "🗿";
    const playerChoice2 = "🪓";
    const playerChoice3 = "🌳";

    const expectedOutput1 = "🌳";
    const expectedOutput2 = "🗿";
    const expectedOutput3 = "🪓";

    expect(pickComputerChoice(playerChoice1)).toBe(expectedOutput1);
    expect(pickComputerChoice(playerChoice2)).toBe(expectedOutput2);
    expect(pickComputerChoice(playerChoice3)).toBe(expectedOutput3);
  });
  it("should return a 🦜 if the value for player choice is empty", () => {
    const expectedOutput = "🦜";

    expect(pickComputerChoice()).toBe(expectedOutput);
  });
  it("should return a 🦜 if the value for player choice is wrong data type", () => {
    const playerChoice = 3.14;
    const expectedOutput = "🦜";

    expect(pickComputerChoice(playerChoice)).toBe(expectedOutput);
  });
  it("should return a 🦜 if the value is not 🗿-🪓-🌳", () => {
    const playerChoice = "🦜";
    const expectedOutput = "🦜";

    expect(pickComputerChoice(playerChoice)).toBe(expectedOutput);
  });
});
