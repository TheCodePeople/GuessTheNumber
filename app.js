function generateRandomNumber() {
  return Math.floor(Math.random() * 5);
}

function getUserGuess() {
  let UserGuess = prompt("enter the num from 1 to 100");
  return parseInt(UserGuess);
}
function checknumber(UserGuess, Number) {
  if (UserGuess > Number) {
    console.log("tooo high");
    return false;
  } else if (UserGuess < number) {
    console.log("tooo low ");
    return false;
  } else {
    console.log("correct");
    return true;
  }
}

function games() {
  let correctnumber = generateRandomNumber();
  console.log(correctnumber);

  //   let guessnumber = false;
  //   for (guessnumber = 0; guessnumber; guessnumber++) {
  //     UserGuess = getUserGuess();
  //     guessnumber = checknumber(UserGuess, Number);
  //   }
  let UserGuess;
  let isCorrect;
  do {
    UserGuess = getUserGuess();
    isCorrect = checknumber(UserGuess, correctnumber);
  } while (!isCorrect);
}
games();
