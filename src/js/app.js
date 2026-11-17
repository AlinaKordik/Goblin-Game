import goblinImgSrc from '../img/goblin.png';

export default class GoblinGame {
  constructor(boardElement, size = 4) {
    this.board = boardElement;
    this.size = size;
    this.cells = [];
    this.currentIndex = -1;
    this.goblin = null;
    this.intervalId = null;
  }

  init() {
    this.renderBoard();
    this.createGoblin();
    this.moveGoblin();
    this.start();
  }

  renderBoard() {
    this.board.innerHTML = '';
    this.cells = [];

    for (let i = 0; i < this.size * this.size; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.board.append(cell);
      this.cells.push(cell);
    }
  }

  createGoblin() {
    this.goblin = document.createElement('img');
    this.goblin.src = goblinImgSrc;
    this.goblin.alt = 'Персонаж';
    this.goblin.classList.add('goblin');
  }

  getRandomIndex() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.cells.length);
    } while (newIndex === this.currentIndex);

    return newIndex;
  }

  moveGoblin() {
    const nextIndex = this.getRandomIndex();
    this.currentIndex = nextIndex;
    // Просто вызываем append: браузер сам перенесет узел из старого родителя в нового
    this.cells[nextIndex].append(this.goblin);
  }

  start(delay = 1000) {
    this.intervalId = setInterval(() => {
      this.moveGoblin();
    }, delay);
  }

  stop() {
    clearInterval(this.intervalId);
  }
}
