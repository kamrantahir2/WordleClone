import { generate } from "random-words";

let word;

const setWord = () => {
  word = generate({ minLength: 5, maxLength: 5 });
};

const getWord = () => {
  return word;
};

const checkGuess = (guess) => {
  if (word) {
    return guess.toLowerCase() === word.toLowerCase();
  } else {
    return false;
  }
};

export default { getWord, setWord, checkGuess };
