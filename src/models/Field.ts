import { Dimension } from "../types/enums";
import {Cell} from "./Cell"
import Coord from "./Coord";
import ModelCells from "./ModelCells";
import {Row} from "./Row";

export default class Field {
  protected _field: Row[] = [];
  protected size: number;
  protected dimension: Dimension;
  protected preparedModel: ModelCells | null;

  constructor(size: number, dimension: Dimension, preparedModel: ModelCells | null, random: boolean) {
    this.size = size;
    this.dimension = dimension;
    this.preparedModel = preparedModel;
    if(random) {
      this.generateRandomField();
      return;
    } else {
      this.generateField();
    }    
  }

  private generateField(): void {
    const size = this.size;
    for(let x = 0; x < size; x++) { // Rows
      const row: Row = new Row();
      for(let y = 0; y < size; y++) { // Cols
        const coord: Coord = new Coord(x, y);
        const cell: Cell = new Cell(coord, false);
        row.appendCell(cell);
      }
      this._field.push(row);
    }
  }

  private generateRandomField() {

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