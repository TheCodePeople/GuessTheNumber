function generateRandomNumber() {
    return Math.round(Math.random() * 100);
}

function getUserGuess() {
    let guess = prompt("Choose a number between 1 and 100:");
    return parseInt(guess);

}

function compareNumbers(actualNumber, userGuess) {
    if (userGuess > actualNumber) {
        alert("Too high!");
        return false;
    } else if (userGuess < actualNumber) {
        alert("Too low!");
        return false;
    } else {
        alert("Correct!");
        return true;
    }
}

function playGame() {
    let num = generateRandomNumber();
    let userGuess = getUserGuess();
    let guessResult = compareNumbers(num, userGuess);

    while (!guessResult) {
        userGuess = getUserGuess();
        guessResult = compareNumbers(num, userGuess);
    }
}

playGame();
