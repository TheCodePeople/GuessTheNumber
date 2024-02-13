function generateRandomNumber() {
    return Math.floor(Math.random() * 100)
}
console.log(generateRandomNumber());


function getUserGuess() {
    const guess = prompt("enter ur guess")
    return guess;

}
getUserGuess();


function compareNumbers(UserGuess, randomNumber) {

    if (UserGuess == randomNumber) {
        console.log("you are right!")
        return true;
    } else if (UserGuess > randomNumber) {
        console.log("to high")
        return false;

    } else if (UserGuess == randomNumber) {
        console.log("to low")
        return false;
    }

}

function playGame() {

    const randomNumber = generateRandomNumber();
    const UserGuess = getUserGuess();
    const ompareNumbers = (UserGuess, randomNumber);

}
playGame();