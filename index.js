function playDice() {

  // random number between 1-6
  const randomNumber1 = Math.ceil(Math.random() * 6);
  const randomNumber2 = Math.ceil(Math.random() * 6);

  // show palyer result
  const srcPlayer1 = `./images/dice${randomNumber1}.png`;
  const srcPlayer2 = `./images/dice${randomNumber2}.png`;


  // Determine the winner message
  const winnerMessage =
  randomNumber1 === randomNumber2
    ? "Draw!"
    : randomNumber1 > randomNumber2
    ? "🚩Player 1 Win!"
    : "🚩Player 2 Win!";

  // show winning message
  document.querySelector(".container h1.winMessage").textContent=winnerMessage;

  // set src to images
  document.querySelector(".img1").setAttribute("src", srcPlayer1);
  document.querySelector(".img2").setAttribute("src", srcPlayer2);
}
