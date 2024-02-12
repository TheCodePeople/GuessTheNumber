function generateRandomNumber(){
let num=Math.floor(Math.random()*100+1);
console.log(num);
    return num ;
}

function getUserGuess(){
    let guess=prompt("Guess a number between 1 and 100.");
    return guess;
}

function compareNumbers(userGuess, actualNum){
    userGuess=parseFloat(userGuess);
if(userGuess === actualNum){
    console.log("Correct!!");
    return true;
}
else if (userGuess>actualNum){
    console.log("Too high!!!");
    return false;
}
else if (userGuess<actualNum){
        console.log("Too low!!!");
        return false;
}
}

function playGame(){
    let randomNum = generateRandomNumber();
    let guess=getUserGuess();
    console.log(compareNumbers(guess, randomNum));
}

playGame();