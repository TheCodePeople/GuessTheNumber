function generateRandomNumber() {
  let  number= Math.floor((Math.random()*100))
    return number
  
} 


function getUserGuess(){
    enterNumber =parseInt( prompt(`input the number`))
   return enterNumber
}

   function comperNumbers(guess,random){
    if (guess === random)
    { console.log("correct!");}

    else if (guess>random)
    {console.log(("too high!"));}

    else{console.log("too low!");} }

 function playGame(){

    console.log("Guess Number!");
    console.log("i'm thinking of number between 1 and 100")


 let userNum =getUserGuess()
 let randomNum =generateRandomNumber()



    
    console.log( comperNumbers(userNum,randomNum));

 }
 playGame()
    
    
    

