export default class Cell {
    private _xLoc: number;
    private _yLoc: number;
    private _width: number;
    private _height: number;
    private _color: string;

    private _velocity: number;
    private _density: number;

    constructor( xLoc: number, yLoc: number, width: number, height: number)
    {
        this._xLoc = xLoc;
        this._yLoc = yLoc;
        this._width = width;
        this._height = height;

        this._density = Math.random();
        this._velocity = Math.random();
    }

    get velocity(): number {
        return this._velocity;
    }

    set velocity(velocity: number){
        this._velocity = velocity;
    }

    get density(): number{
        return this._density;
    }

    set density(density: number) {
        this._density = density;
    }

    get xLoc(): number {
        return this._xLoc;
    }

    set xLoc(loc: number){
        this._xLoc = loc;
    }

    get yLoc(): number {
        return this._yLoc;
    }

    set yLoc(loc: number){
        this._yLoc = loc;
    }

    get width():number{
        return this._width;
    }

    set width(size: number){
        this._width = size;
    }

    get height():number{
        return this._height;
    }

    set height(size: number){
        this._height = size;
    }

    get color():string{
        return this._color;
    }

    set color(newColor:string){
        this._color = newColor;
    }

}