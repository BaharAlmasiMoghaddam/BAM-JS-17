let randomNumber = Math.floor(Math.random() * 100 + 1);
userTries = 0;
const maxTries = 10;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let triesOutput = document.querySelector(".Tries-output");
  let lastOutput = document.querySelector(".final-output");

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if (guess < 1 || guess > 100 || guess === "") {
    lastOutput.textContent = "Dude! Enter a number between 1 & 100!";
    return;
  }

  for (let i = 1; i <= 1; i++) {
    userTries += i;
  }
  triesOutput.textContent = `Tries: ${userTries}`;

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
  if (guess > randomNumber) {
    lastOutput.textContent = "Number is too high, try again";

    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
  } else if (guess < randomNumber) {
    lastOutput.textContent = "Number is too low, try again";

    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
  } else {
    lastOutput.textContent = `Guess is correct. You win!!!! The number was ${randomNumber}`;
    return;
  }

  if (userTries >= maxTries) {
    lastOutput.textContent = `You're a loser! the number was ${randomNumber}!`;
    document.querySelector(".btnGuess").disabled = true;
  }
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button

function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);

  //Reset users input field
  document.querySelector(".inputs-Values").value = "";

  //Reset tries, and triesTaken by the user
  userTries = 0;
  document.querySelector(".Tries-output").textContent = "Tries: 0";
  document.querySelector(".final-output").textContent =
    "Guess a number between 1 and 100";
  document.querySelector(".btnGuess").disabled = false;
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);

document.querySelector(".btnNewGame").addEventListener("click", newGame);
