import { useState, useEffect } from "react";
import gameLogic from "./logic/gameLogic.js";
import "./App.css";

function App() {
  const [guess, setGuess] = useState("");
  const [wordArray, setWordArray] = useState([]);
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    gameLogic.setWord();
    console.log(gameLogic.getWord());
  }, []);

  const handleCheck = (e) => {
    e.preventDefault();
    setCorrect(gameLogic.checkGuess(guess));
  };

  return (
    <>
      <input
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        type="text"
      />
      <br />
      <button onClick={handleCheck}>Check</button>
      Correct Guess: {correct.toString()}
    </>
  );
}

export default App;
