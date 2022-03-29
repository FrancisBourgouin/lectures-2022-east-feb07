import { render } from "@testing-library/react";
import Result from "../Result";

describe("Result rendering the proper message", () => {
  it("should show a message when waiting for a result", () => {
    const { getByTestId, debug } = render(<Result />);

    const waitingMessage = getByTestId("waitingMessage");

    expect(waitingMessage).toHaveTextContent("Waiting for your choice !");

    // debug();
  });
  it("should show a relevant message based on win/lose/tie", () => {
    const { getByTestId, queryByTestId } = render(
      <Result message={"Won one over Skynet"} />
    );

    const waitingMessage = queryByTestId("waitingMessage");
    const resultMessage = getByTestId("resultMessage");

    expect(waitingMessage).not.toBeInTheDocument();
    expect(resultMessage).toHaveTextContent("Won one over Skynet");
  });
});
