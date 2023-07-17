function generateRandomNumber() {
  return Math.floor(Math.random() * 100);
}
function getUserGuess() {
  let guess = parseInt(prompt("Enter a number between 1 and 100:"));
  return guess;
}
function compareNumbers(guess, actualNumber) {
  if (guess > actualNumber) {
    alert("Too high!");
    return false;
  } else if (guess < actualNumber) {
    alert("Too low!");
    return false;
  } else {
    alert("Correct! Congratulations!");
    return true;
  }
}
function playGame() {
  let actualNumber = generateRandomNumber();
  console.log(actualNumber);
  let guess;
  let guessedCorrectly = false;

  alert("Guess the Number!\n\nI'm thinking of a number between 1 and 100.");

  while (!guessedCorrectly) {
    guess = getUserGuess();
    guessedCorrectly = compareNumbers(guess, actualNumber);
  }
}
playGame();
