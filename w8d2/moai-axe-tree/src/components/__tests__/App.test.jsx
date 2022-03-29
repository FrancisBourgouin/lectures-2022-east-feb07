import { render, fireEvent } from "@testing-library/react";
import App from "../../App";

describe("App component feature (click -> result)", () => {
  it("should show a result when we click on a player choice", () => {
    const { debug, getByText, getByTestId } = render(<App />);

    // const player = getByTestId("player");
    // player.getByTestId("🗿");

    const moaiButton = getByTestId("moai");

    fireEvent.click(moaiButton);

    const resultMessage = getByTestId("resultMessage");

    expect(resultMessage).toHaveTextContent("Skynet has won");

    // debug();
  });
});
