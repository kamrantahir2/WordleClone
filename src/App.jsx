import { useState, useEffect, useRef } from "react";
import gameLogic from "./logic/gameLogic.js";
import "./App.css";

function App() {
  const [guess, setGuess] = useState("");

  useEffect(() => {
    gameLogic.setWord();
    console.log();
  }, []);

  return (
    <>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        type="text"
      />
      Correct Guess: {gameLogic.checkGuess(guess).toString()}
    </>
  );
}

export default App;
