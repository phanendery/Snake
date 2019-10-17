import { Board } from "./board"; //named export
import { Snake, SnakeNode } from "./snake";
import { Apple } from "./apple";
import { Berry } from "./berry";

export class Game {
  //instance properties, tells TS whats on the instances of this class game.ctx, etc
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private requestedFrameId: number = -1;
  private board: Board; //instance of board class
  private snake: Snake;
  private apple: Apple;
  private berry: Berry;
  private scoreElement: HTMLSpanElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");

    this.board = new Board(canvas);
    this.snake = new Snake(canvas);
    this.apple = new Apple(5, 5, canvas);
    this.berry = new Berry(7, 7, canvas);
    this.scoreElement = document.querySelector("#score-display");
    this.updateScore(this.snake.size());
  }

  private loop() {
    //main function, clear board, draw all of our stuff and redo
    this.requestedFrameId = requestAnimationFrame(() => this.loop()); //rAF, right before the screen updates, call this function

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //clearing the grid each time
    this.snake.update();
    this.board.draw();
    this.snake.draw();
    this.berry.draw(this.ctx);
    this.apple.draw(this.ctx);

    if (this.snakeIsEatingFood(this.apple)) {
      this.snake.grow();
      this.spawnFruit();
      this.updateScore(this.snake.size());
    }

    if (this.snakeIsEatingFood(this.berry)) {
      this.snake.shrink();
      this.spawnFruit();
      this.updateScore(this.snake.size());
    }

    if (this.snake.isDead()) {
      this.endLoop();
    }
  }

  private spawnFruit() {
    this.spawnApple();
    this.spawnBerry();
  }

  private updateScore(size: number) {
    this.scoreElement.innerText = (size * 75).toString();
    // return size * 75;
  }

  private snakeIsEatingFood(food: Apple | Berry) {
    return food.x === this.snake.nodes[0].x && food.y === this.snake.nodes[0].y;
  }

  private spawnBerry() {
    let rand = this.potentialSpots();
    this.berry.moveBerry(rand.x, rand.y);
  }

  private potentialSpots() {
    const snakeSet = new Set<string>(); //creating a snake Set type string
    this.snake.nodes.forEach(node => {
      snakeSet.add(`${node.x},${node.y}`);
    });
    const potentialSpots: SnakeNode[] = []; //single x,y  node with an array of x,y
    for (let y = this.board.startIdxY; y < this.board.endIdxY; y++) {
      for (let x = this.board.startIdxX; x < this.board.endIdxX; x++) {
        if (!snakeSet.has(`${x},${y}`)) {
          potentialSpots.push({ x, y }); //potential spots for the apple to spawn
        }
      }
    }
    //math random the snake to pick a random spot in the array to spawn the apple
    let randSpot =
      potentialSpots[Math.floor(Math.random() * potentialSpots.length)];
    return randSpot;
  }

  private spawnApple() {
    let rand = this.potentialSpots();
    this.apple.moveApple(rand.x, rand.y);
  }

  startLoop() {
    this.requestedFrameId = requestAnimationFrame(() => this.loop());
  }

  endLoop() {
    cancelAnimationFrame(this.requestedFrameId);
  }
}
