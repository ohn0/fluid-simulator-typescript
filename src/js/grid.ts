import Cell from './cell';

export default class Grid {
    private cells: any;
    private cellsRowCount: number;
    private cellsColCount: number;
    constructor(width: number, height: number, cellSize: number) {
        this.cells = [];
        var i:number;
        // console.log(height/cellSize);
        // console.log(width/cellSize);
        // console.log("Original Height: " + height);
        // console.log("Original Width:" + width);
        var singleCellWidth: number = width/cellSize;
        var singleCellHeight: number = height/cellSize;
        this.cellsRowCount = singleCellHeight;
        this.cellsColCount = singleCellWidth;

        for(i = 0; i < (1 + (singleCellHeight)); i++){
            this.cells[i] = [];
            var j: number;
            for(j = 0; j <(1 + (singleCellWidth)); j++){
                this.cells[i][j] = new Cell(i * cellSize, j * cellSize, cellSize, cellSize);
            }
        }
    }

    public assignRandomColors():void {
        var randomColor:string;
        var i: number;
        var j: number;

        for(i = 0; i < this.cellsRowCount; i++){
            for(j = 0; j < this.cellsColCount; j++){
                randomColor = Math.floor(Math.random()*16777215).toString(16);
                this.cells[i][j].color = "#"+randomColor;
            }
        }
    }

    public assignSingleColor():void {
        var white: string = "#FFFFFF";
        var black: string = "#000000";

        var i: number;
        var j: number;
        for(i = 0; i < this.cellsRowCount; i++){
            for(j = 0; j < this.cellsColCount; j++){
                this.cells[i][j].color = Math.random() > .5 ? white : black;
            }
        }
    }



    public updateCellColors(ctx: CanvasRenderingContext2D): void{
        var i:number;
        var j:number;

        var cell: Cell;
        for(i = 0; i < this.cellsRowCount; i++){
            for(j=0; j < this.cellsColCount; j++){
                cell = this.cells[i][j];
                ctx.fillStyle = cell.color;
                ctx.fillRect(cell.xLoc, cell.yLoc, cell.xLoc+cell.width, cell.yLoc+cell.height);
            }
        }
    }
}