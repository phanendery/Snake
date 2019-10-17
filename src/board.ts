import * as Settings from "./settings";

export class Board {
  private canvasWidth: number = 0;
  private canvasHeight: number = 0;
  private ctx: CanvasRenderingContext2D;
  private cellWidth: number;
  private cellHeight: number;

  startIdxX: number;
  endIdxX: number;
  startIdxY: number;
  endIdxY: number;

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this.cellWidth = this.canvasWidth / Settings.board.dimX;
    this.cellHeight = this.canvasHeight / Settings.board.dimX;
    this.startIdxX = 1;
    this.startIdxY = 1;
    this.endIdxX = Settings.board.dimX - 2;
    this.endIdxY = Settings.board.dimY - 2;
  }

  draw() {
    this.ctx.fillStyle = "black";
    for (let row = this.startIdxY; row < Settings.board.dimX - 1; row++) {
      for (let col = this.startIdxX; col < Settings.board.dimX - 1; col++) {
        this.ctx.fillRect(
          col * this.cellWidth,
          row * this.cellHeight,
          this.cellWidth - 3,
          this.cellHeight - 3
        );
      }
    }
  }
}
