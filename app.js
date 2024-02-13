
// طباعة رقم عشوائي
function generateRandomNumber(){
  return Math.floor( Math.random() *10)
  
  
}

// ادخال رقم من المستخدم
function getUserGuess(){
  let constguess=Number(prompt ("enter ur guess"));
  return constguess;

}

function compareNumbers(num1,num2){
  console.log(num1, num2)
    if(num1 === num2){
        console.log ("you're right");
        return "true";
    
    }else if (num1 < num2)
    {
      console.log  ("too low!");
    return "false";
    }else {
        console.log("Too high!");
        return "false";

    }
  
} ; 
function playGame(){

compareNumbers(getUserGuess(), generateRandomNumber())

}
playGame();


