

// Game values
let min = 3,
  max = 9,
  winningNum = getRandomNumber(min, max),
  guessesLeft = 3;

// UI elements

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// Assign UI  min and max

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener("mousedown", function(e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// Event Listener for guess

guessBtn.addEventListener("click", function() {
  let guess = parseInt(guessInput.value, 10);
  // Validate Input
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter a number between ${min} and ${max}!`, "red");
    guessInput.value = "";
    guessInput.focus();
  }
  // Game over - won  Check if won
  else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game over  -  lost

      //game continuis - answer wrong

      gameOver(
        false,
        `Game Over! YOU LOST. The correct number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      //Change border color
      guessInput.classList.add("red");
      //Clear input
      guessInput.value = "";
      //Tell user its the wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});

//Set message
function setMessage(msg, color) {
  if (message.classList.contains("red")) {
    message.classList.remove("red");
  }
  message.classList.add(color);
  message.textContent = msg;
}
//Game over
function gameOver(won, msg) {
  let wonGame;
  won === true ? (wonGame = "green") : (wonGame = "red");
  //Disable input
  guessInput.disabled = true;
  // Change border color
  if (guessInput.classList.contains("red")) {
    guessInput.classList.remove("red");
  }
  guessInput.classList.add(wonGame);
  // Set message
  setMessage(msg, wonGame);

  // Play Again?
  guessBtn.value = "Play Again";
  guessBtn.classList += "play-again";
}
//Get winning number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
