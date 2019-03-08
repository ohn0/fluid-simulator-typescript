import Simulator from './simulator';

export default class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private cellSize: number;

    private simulator: Simulator;

    constructor(cellSize: number) {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.cellSize = cellSize;
        this.ctx = this.canvas.getContext("2d");
        this.simulator = new Simulator(this.cellSize, this.ctx, this.canvas);

    }

    public render(): void {
        // this.ctx.strokeStyle = "#000000";
        // this.ctx.strokeRect(0,0, this.canvas.width, this.canvas.height);
        // this.grid.updateCellColors(this.ctx);
        this.simulator.update();
    }

}