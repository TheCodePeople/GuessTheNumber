const generateRandomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  return number;
};

const getUserGuess = () => {
  const userGuess = prompt("Enter a number between 1 and 100");
  return parseInt(userGuess);
};

const compareNumbers = (number, userGuess) => {
  if (number > userGuess) {
    alert("Your guess is too low");
    return false;
  }
  if (number < userGuess) {
    alert("Your guess is too high");
    return false;
  }
  if (number === userGuess) {
    alert("Correct! ");
    return true;
  }
};

const playGame = () => {
  const number = generateRandomNumber();
  let userGuess = getUserGuess();
  while (compareNumbers(number, userGuess) === false) {
    userGuess = getUserGuess();
  }
};
playGame();
