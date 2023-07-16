function generateRandomNumber()
{
    let randomn = Math.floor(Math.random() * 100);
    alert(randomn);
    return randomn;
}
function getUserGuess()
{
    return parseInt(prompt("ادخل رقم بين 1 و 100"));

}
function compareNumbers(userGess , actualNumber)
{
    if(userGess > actualNumber)
    {
        alert("الرقم كبير");
        return false;
    }else if(userGess < actualNumber){
        alert("الرقم صغير");
        return false;
    }else if(userGess == actualNumber)
    {
        return true;
    }
}
let gen=generateRandomNumber();
function playGame()
{
    
if (compareNumbers(getUserGuess() , gen)  == true)
{
    
alert("لقد نجحت");
}
}
while (true){
playGame();
}