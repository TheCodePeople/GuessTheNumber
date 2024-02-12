function generateRandomNumber() {
    let num= Math.floor(Math.random()*100);
    return num
  }

function getUserGuess() {
    let number=prompt("Guess a number");
    return parseInt(number);
    
}

function compareNumbers(guess,random) {
    if (guess===random){
        alert("Correct!");
     
    } else if(guess<random){
        alert("Too low!");
       
    } else {
        alert("Too high!");
        
    }
}

function playGame() {
    let randomNumber=generateRandomNumber()
    let userGuess=getUserGuess()
    console.log(compareNumbers(userGuess,randomNumber))
}


 playGame()
