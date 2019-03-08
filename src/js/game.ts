import Grid from './grid';

export default class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private height: number;
    private width: number;
    private cellSize: number;
    private grid: Grid;

    constructor(cellSize: number) {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.cellSize = cellSize;

        this.ctx = this.canvas.getContext("2d");
        this.grid = new Grid(this.canvas.width, this.canvas.height, this.cellSize);
        this.grid.assignSingleColor();
        this.grid.updateCellColors(this.ctx);
    }

    public render(): void {
        this.ctx.strokeStyle = "#000000";
        this.ctx.strokeRect(0,0, this.canvas.width, this.canvas.height);
        this.grid.updateCellColors(this.ctx);
    }

    private addDensitySources(densities: any[])
    {
        
    }

}