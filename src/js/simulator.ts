import Grid from './grid';

export default class Simulator {
    private ctx: CanvasRenderingContext2D;
    private grid: Grid;
    private cellSize: number;
    private _deltaTime: number = 1.0;

    constructor(cellSize: number, 
                ctx: CanvasRenderingContext2D,
                canvas: HTMLCanvasElement)
    {
        this.ctx = ctx;
        this.cellSize = cellSize;

        this.grid = new Grid(canvas.width, canvas.height, this.cellSize);
        this.grid.assignSingleColor();
        this.grid.updateCellColors(this.ctx);
    }

    get deltaTime():number {
        return this._deltaTime;
    }

    set deltaTime(dT:number){
        this._deltaTime = dT;
    }

    public update(): void {
        this.grid.updateCellColors(this.ctx);
    }

    public addDensitySources(densities: any[]): void
    {
        this.grid.addDensity(densities);

    }

    


}