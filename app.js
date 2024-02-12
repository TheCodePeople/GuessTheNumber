function generateRandomNumber(){
     randomNum = Math.floor((Math.random() * 100) );
     console.log(randomNum)
return randomNum

}
function getUserGuess(){
   enteredNum=parseInt(prompt("enter number between 1 to 100")) 
return enteredNum
}
 function compareNumbers(userGuess, actualNum){
if(userGuess>actualNum){
    console.log("Too high!")
}else if (userGuess<actualNum){
    console.log("Too low!")
}else if (serGuess===actualNum){
    console.log("correct!")
}
}
let randomNum
let enteredNum
function playGame(){
    console.log("Guess the number!")
    console.log("I'm thinking of a number between 1 and 100.")
    generateRandomNumber(randomNum)
    getUserGuess(enteredNum)
    compareNumbers(enteredNum,randomNum)
}
playGame()