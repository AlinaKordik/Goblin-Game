import GoblinGame from './app';

test('создает игровое поле 4x4 и размещает персонажа', () => {
  document.body.innerHTML = '<div id="game-board"></div>';
  const board = document.getElementById('game-board');
  const game = new GoblinGame(board, 4);

  game.renderBoard();
  game.createGoblin();
  game.moveGoblin();

  expect(board.querySelectorAll('.cell').length).toBe(16);
  expect(board.querySelectorAll('.goblin').length).toBe(1);
  game.stop();
});
