import * as Settings from "./settings";

export class Apple {
  private cellWidth: number;
  private cellHeight: number;

  constructor(public x: number, public y: number, canvas: HTMLCanvasElement) {
    //public also 
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    this.cellWidth = canvasWidth / Settings.board.dimX;
    this.cellHeight = canvasHeight / Settings.board.dimY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    //draws the single red square , drawing the snake
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(
      this.x * this.cellWidth + 8,
      this.y * this.cellHeight + 8,
      30,
      30
    );
  }

  moveApple(x: number, y: number) {
    this.x = x;
    this.y = y;
    // ctx.fillRect(
    //   x * this.cellWidth + 8,
    //   y * this.cellHeight + 8,
    //   this.x,
    //   this.y
    // );
  }
}
