
function generateRandomNumber() {
    return Math.floor(Math.random() * 5);
}


function getUserGuess() {
    return parseInt(prompt('Enter a number between 1 and 100'));
}

function compareNumbers(userGuess, randomNumber) {
    if (userGuess > randomNumber) {
        alert('Too high!');
        return false;
    } else if (userGuess < randomNumber) {
        alert('Too low!');
        return false;
    } else {
        alert('Correct!');
        return true;
    }
}

function playGame() {
    let randomNumber = generateRandomNumber();
    console.log(randomNumber);

    let userGuess;
    let isCorrect;

    do {
        userGuess = getUserGuess();
        isCorrect = compareNumbers(userGuess, randomNumber);
    } while (!isCorrect);
}


playGame();