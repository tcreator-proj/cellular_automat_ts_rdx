import {Cell} from "./Cell";
import {nanoid} from 'nanoid';

export class Row {
  protected cells: Cell[];
  protected _id: string;

  constructor() {
    this.cells = [];
    this._id = nanoid();
  }

  public appendCell(cell: Cell): void {
    this.cells.push(cell);
  }

  public getCell(index: number): Cell | null {
    return this.cells[index] || null;
  }

  public get line(): Cell[] {
    return this.cells;
  }

  public get len(): number {
    return this.cells.length;
  }

  public get id() {
    return this._id;
  }
}