function generatedRandomNumber() {
  Math.round(Math.random() * 100 + 1);
  return Math.round(Math.random() * 100 + 1);
}

function getUserGuess() {
  let input = prompt("What's your guess?");
  return parseInt(input);
}

function compareNumbers(input, generatedNumber) {
  if (input > generatedNumber) {
    alert("Too High!");
    return false;
  } else if (input < generatedNumber) {
    alert("Too Low!");
    return false;
  } else {
    alert("Correct!");
    return true;
  }
}

function playGame() {
  const generatedNumber = generatedRandomNumber();
  console.log(generatedNumber);
  let input = getUserGuess();
  compareNumbers(input, generatedNumber);
}

playGame();
