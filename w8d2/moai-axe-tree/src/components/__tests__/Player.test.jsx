import Player from "../Player";
import { render, fireEvent } from "@testing-library/react";

describe("Player choice button test", () => {
  it("Clicking on a button should trigger a function call", () => {
    const setPlayerChoice = jest.fn();
    const { getByText } = render(<Player setPlayerChoice={setPlayerChoice} />);

    const moaiButton = getByText("🗿");

    fireEvent.click(moaiButton);

    expect(setPlayerChoice).toHaveBeenCalled();

    // console.log(moaiButton);
  });
  it("Clicking on an emoji should show the specific emoji as a return statement", () => {
    const setPlayerChoice = jest.fn();
    const { getByText } = render(<Player setPlayerChoice={setPlayerChoice} />);

    const choices = ["🗿", "🪓", "🌳"];

    for (const choice of choices) {
      const choiceButton = getByText(choice);
      fireEvent.click(choiceButton);
      expect(setPlayerChoice).toHaveBeenCalledWith(choice);
    }
  });
});
