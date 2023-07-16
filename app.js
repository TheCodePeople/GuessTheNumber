function generateRandomNumber () {
    let randomNumber = Math.floor(Math.random()* 100);
    return randomNumber;
}


function getUserGuess () {
    let userGuess = prompt("enter number from 1 to 100");
     return parseInt(userGuess); ;
}

function compareNumbers (userGuess , randomNumber) {
    if (userGuess < randomNumber) {
            console.log("Too high!");
            return false ;
    }
     if (userGuess > randomNumber) {
            console.log("Too low!");
            return false ;
    }
     if (userGuess === randomNumber) {
            console.log("Correct! Congratulations!");
            return true;
    }
    
}


  function playGame () {
    const number = generateRandomNumber();

    let userGuess = getUserGuess();
  
  
    while (compareNumbers(number, userGuess) === false) {
      
      userGuess = getUserGuess();
    }
  };
  

  playGame();