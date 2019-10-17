import * as Settings from "./settings";

export interface SnakeNode {
  x: number;
  y: number;
} // not that much stuff so easier to be an interface

export class Snake {
  private ctx: CanvasRenderingContext2D;
  private x: number;
  private y: number;
  private snakeHead: HTMLImageElement;

  nodes: SnakeNode[]; //telling TS its a an array of SnakeNodes

  private cellWidth: number;
  private cellHeight: number;
  private updateFrame: number = 0;
  // private nodes: SnakeNode[] = [[1, 1], [0, 1]];
  private dir: "ArrowRight" | "ArrowLeft" | "ArrowDown" | "ArrowUp" =
    "ArrowRight";

  constructor(private canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d");

    // this.nodes.forEach(node => this.draw(node));

    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;
    this.cellWidth = canvasWidth / Settings.board.dimX;
    this.cellHeight = canvasHeight / Settings.board.dimY;
    this.snakeHead = new Image();
    this.snakeHead.src = "../snakeHead.png";
    this.snakeHead.onload = () => {
      console.log("loaded");
    };

    this.nodes = [
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 1, y: 3 },
      { x: 1, y: 4 },
      { x: 1, y: 5 }
    ];

    document.addEventListener("keydown", e => {
      if (
        e.key === "ArrowRight" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowUp"
      ) {
        this.dir = e.key;
      }
    });
  }

  draw() {
    this.nodes.slice(1).forEach(node => {
      this.drawNode(node, "red");
    });
    this.drawNode(this.nodes[0], "blue");
  }

  drawHead() {
    this.ctx.drawImage(
      this.snakeHead,
      this.x * this.cellWidth,
      this.y * this.cellHeight,
      50,
      50
    );
  }

  grow() {
    const growAmount = Settings.snake.growAmount;
    const tailIdx = this.nodes.length - 1;

    for (let i = 0; i < growAmount; i++) {
      const clone = this.cloneNode(tailIdx);
      this.nodes.push(clone);
    }
  }

  shrink() {
    const shrinkAmount = Settings.snake.shrinkAmount;
    for (let i = 0; i < shrinkAmount; i++) {
      this.nodes.pop();
    }
  }

  size() {
    return this.nodes.length - 5;
  }

  private cloneNode(idx: number): SnakeNode {
    return { x: this.nodes[idx].x, y: this.nodes[idx].y };
  }

  private drawNode(node: SnakeNode, color: string) {
    //draws the single red square , drawing the snake
    this.ctx.fillStyle = color;
    this.ctx.fillRect(
      node.x * this.cellWidth + 8,
      node.y * this.cellHeight + 8,
      30,
      30
    )
  }

  private updateBody() {
    // last index of the nodes array till first one
    for (let i = this.nodes.length - 1; i > 0; i--) {
      this.nodes[i].x = this.nodes[i - 1].x;
      this.nodes[i].y = this.nodes[i - 1].y;
    }
  }

  private updateHead() {
    const headNode = this.nodes[0];
    switch (this.dir) {
      case "ArrowDown":
        headNode.y++;
        break;
      case "ArrowLeft":
        headNode.x--;
        break;
      case "ArrowRight":
        headNode.x++;
        break;
      case "ArrowUp":
        headNode.y--;
    }
  }

  isDead() {
    const headNode = this.nodes[0];
    if (headNode.x >= Settings.board.dimX - 1) {
      return true;
    }
    if (headNode.x < 1) {
      return true;
    }
    if (headNode.y >= Settings.board.dimY - 1) {
      return true;
    }
    if (headNode.y < 1) {
      return true;
    }

    const headHittingBody = this.nodes.slice(1).some(node => {
      return node.x === headNode.x && node.y === headNode.y;
    });

    if (headHittingBody) return true;

    return false;
  }

  update() {
    this.updateFrame++;
    if (this.updateFrame % Settings.board.speed === 0) {
      this.updateBody();
      this.updateHead();
    }
  }
}
