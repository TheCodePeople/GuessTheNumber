function generateRandomNumber() {
  return Math.floor(Math.random() * 101);
}

function playGame() {
  const number = generateRandomNumber();
  console.log(number);
  let getNumber = true;
  while (getNumber == true) {
    let compareNumbers = prompt("Enter the guess number");
    let guess = parseInt(compareNumbers);

    if (guess > number) {
      alert("too high!");
      console.log(guess, number);
    } else if (guess < number) {
      alert("too low!");
      console.log(guess, number);
    } else if (guess == number) {
      alert("correct");
      console.log(guess, number);

      getNumber = false;
    }
  }
}

playGame();
