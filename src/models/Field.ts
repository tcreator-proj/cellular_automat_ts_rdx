import { nanoid } from "nanoid";
import {Cell} from "./Cell"
import Coord from "./Coord";
import {Row} from "./Row";

export default class Field {
  protected _field: Row[] = [];
  protected size: number[] = [];
  protected _id: string;

  constructor(sizeRow: number, sizeCol: number, random: boolean) {
    this._id = nanoid();
    this.size[0] = sizeRow;
    this.size[1] = sizeCol;

    if(random) {
      this.generateRandomField();
    } else {
      this.generateField();
    }    
  }

  private generateField(): void {
    const [row, col] = this.size;
    for(let x = 0; x < row; x++) { // Rows
      const row: Row = new Row();
      for(let y = 0; y < col; y++) { // Cols
        const coord: Coord = new Coord(x, y);
        const cell: Cell = new Cell(coord, false);
        row.appendCell(cell);
      }
      this._field.push(row);
    }
  }

  get id(): string {
    return this._id;
  }

  /**
   * Принимает массив координат и расставляет точки по полю
   * @param coordList {Array<@link Coord>}
   */
  setPountMap(coordList: Coord[]): void {
    coordList.forEach( (coord: Coord) => {
      const {x, y} = coord.getCoords();
      this._field[x].getCell(y)?.mark();
    })
  }

  private generateRandomField() {

  }

  public getRow(index: number): Row {
    return this._field[index];
  }

  public get len():number {
    return this._field.length;
  }

  public markCell(x: number, y:number): void {
    const row: Row = this.field[x];
    const currentCell: Cell | null = row.getCell(y);

    if(currentCell) {
      currentCell.mark();
    }
  }

  public get field(): Row[] {
    return this._field;
  }
}