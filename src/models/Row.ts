import {Cell} from "./Cell";
import {nanoid} from 'nanoid';

export class Row {
  protected _cells: Cell[];
  protected _id: string;

  constructor() {
    this._cells = [];
    this._id = nanoid();
  }

  public appendCell(cell: Cell): void {
    this.cells.push(cell);
  }

  public getCell(index: number): Cell | null {
    return this._cells[index] || null;
  }

  public get cells(): Cell[] {
    return this._cells;
  }

  public get len(): number {
    return this._cells.length;
  }

  public get id() {
    return this._id;
  }
}