# Task: Guess the Number

## Overview

In this project, you will create a simple "guess the number" game.<br> The program will generate a random number between 1 and 100, and the user will have to guess what the number is.<br> After each guess, the program will tell the user whether the number they guessed is higher or lower than the actual number. <br>The game will continue until the user correctly guesses the number.

---

## Instructions

1.  Write a function called `generateRandomNumber` that generates a random number between 1 and 100.<br> You can use the `Math.random()` function to generate a random decimal between 0 and 1, and then multiply it by 100 and round it down to get a random integer between 1 and 100.

2.  Write a function called `getUserGuess` that prompts the user to enter a number between 1 and 100.<br> Use the `prompt()` function to get the user's input, and then convert it to a number using the `parseInt()` function.

3.  Write a function called `compareNumbers` that takes two arguments: the user's guess and the actual number.

    - If the user's guess is higher than the actual number, display "Too high!" to the user & return `false`.
    - If the user's guess is lower than the actual number, display "Too low!" to the user & return `false`.
    - If the user's guess is equal to the actual number, display "Correct!" to the user & return `true`.

4.  Write a function called `playGame` that brings everything together.

---

## Example Output

```
Guess the Number!

I'm thinking of a number between 1 and 100.

Enter your guess: 50
Too high!

Enter your guess: 25
Too low!

Enter your guess: 37
Too high!

Enter your guess: 31
Too high!

Enter your guess: 28
Too low!

Enter your guess: 29
Correct! Congratulations!
```

---

## Tips

- Don't forget to use the `parseInt()` function to convert the user's input to a number in the `getUserGuess` function.
  
- Use `alret()` to display messages to the user.

- Break the problem down into small, manageable parts, and write one function at a time.

- Test your functions as you write them to make sure they work correctly.

- (BONUS) Use a `while` loop to keep prompting the user for a guess until they correctly guess the number.
