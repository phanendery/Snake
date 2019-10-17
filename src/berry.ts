import * as Settings from "./settings";

export class Berry {
  private cellWidth: number;
  private cellHeight: number;

  constructor(public x: number, public y: number, canvas: HTMLCanvasElement) {
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    this.cellWidth = canvasWidth / Settings.board.dimX;
    this.cellHeight = canvasHeight / Settings.board.dimY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "orange";
    ctx.fillRect(
      this.x * this.cellWidth + 8,
      this.y * this.cellHeight + 8,
      30,
      30
    );
  }

  moveBerry(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
