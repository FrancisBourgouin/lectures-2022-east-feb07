import { useState } from "react";
import { pickComputerChoice } from "../helpers/gameHelpers";
import Computer from "./Computer";
import Player from "./Player";
import Result from "./Result";

export default function Game(props) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const updatePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    setComputerChoice(pickComputerChoice(choice));
  };
  return (
    <div>
      <main className="game">
        <Computer />
        <Player setPlayerChoice={updatePlayerChoice} />
      </main>
      {(!playerChoice || !computerChoice) && <Result />}
      {playerChoice && computerChoice && <Result message="Skynet has won forever." />}
    </div>
  );
}
