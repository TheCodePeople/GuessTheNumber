function generateRandomNumbe(){
 let number= Math.floor( Math.random() *100);
  return number;
}

function getUserGuess(){
let enterNum = parseInt ( prompt("enter youe number"));
 
return enterNum ;
}

function compareNumbers(number1 , number2){
   
  if(number1 === number2){
    console.log("Correct!");
  }else if(number1 > number2){
    console.log("Too low!");
  }else{
    console.log("Too high!");
  }
}

function playGame() {

    const rondednum =generateRandomNumbe();
   
    const userNum = getUserGuess();

    console.log("The random number is:",rondednum);
    console.log("The number you entered is:" ,userNum);

   compareNumbers(rondednum,userNum);
   
}

playGame();
