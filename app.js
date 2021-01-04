const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

const getPlayerChoice = function() {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return;
  }
  return selection;
};

const getComputerChoice = function() {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = function(cChoice, pChoice = DEFAULT_USER_CHOICE) {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (cChoice === ROCK && pChoice === PAPER || cChoice === PAPER && pChoice === SCISSORS || cChoice === SCISSORS && pChoice === ROCK) {
    return RESULT_PLAYER_WINS;
  } else {
    return RESULT_COMPUTER_WINS;
  }
};



startGameBtn.addEventListener("click", function() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting....");
  const playerSelection = getPlayerChoice(); 
  const computerChoice = getComputerChoice();
  let winner;
  if (playerSelection) {
    winner = getWinner(computerChoice, playerSelection);
  } else {
    winner = getWinner(computerChoice);
  }
  let message = `You picked ${playerSelection || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}, therefore you had a draw.`;
  if (winner === RESULT_DRAW) {
    message = message + "had a draw";
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + "won!";
  } else {
    message = message + "lost :(";
  }
  alert(message);
  gameIsRunning = false;
});

// not realted to game
const combine = function(resultHandler, operation, ...numbers) {
  const validateNumber = function(number) {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD"){
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
    
  }
  resultHandler(sum, "The result after adding all numbers is");
};

const subtractUp = function(resultHandler, ...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum -= num;
  }
  resultHandler(sum);
};

const showResult = function(result, messageText) {
  alert(messageText + " " + result);
};


combine([showResult.bind(this, "The result after adding all numbers is:"), "ADD", 1, 5, 12, 4, -5, -7, 10]);
combine([showResult.bind(this, "The result after adding all numbers is:"), "ADD", 1, 5, 12, 4, -5, -7, 10, 5, -9, 13]);
combine(showResult.bind(this, "The result after subtracting all numbers is:"), "SUBTRACT", 1, 10, 15, 20);