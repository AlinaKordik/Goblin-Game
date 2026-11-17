import "./css/style.css";
import GoblinGame from "./js/app";

document.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("game-board");
  const game = new GoblinGame(board, 4);
  game.init();
});
