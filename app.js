const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * 100);

  return number;
};

const getUserGuess = () => {
  const userGuess = prompt("Enter your guess:");
  // pares the prompt string into a number to compare it with the original number
  return parseInt(userGuess);
};

// compareNumbers will display a message to the user depending on their answer, and return a boolean value
const compareNumbers = (number, userGuess) => {
  if (number > userGuess) {
    alert("Too low!");
    return false;
  }

  if (number < userGuess) {
    alert("Too high!");
    return false;
  }

  if (number === userGuess) {
    alert("Correct! Congratulations!");
    return true;
  }
};

const playGame = () => {
  // generate the random number
  const number = generateRandomNumber();
  // ask the user to guess the number
  let userGuess = getUserGuess();

  // use the return value of `compareNumbers` as a conditon to the while loop
  while (compareNumbers(number, userGuess) === false) {
    // keep asking the user to guess until `compareNumbers` function is true
    userGuess = getUserGuess();
  }
};

// start game
playGame();
