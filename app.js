const startGameBtn = document.getElementById('start-game-btn');

const start = function startGame() {
  console.log("Game is starting....");
}

// const person = {
//   name: "Imaad",
//   greet: function greet() {
//     console.log("Hello there!");
//   }
// }

// person.greet();

startGameBtn.addEventListener("click", start);