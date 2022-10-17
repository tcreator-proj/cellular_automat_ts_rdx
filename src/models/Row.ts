import Cell from "./Cell";

export default class Row {
  protected cells: Cell[] = [];

  public appendCell(cell: Cell): void {
    this.cells.push(cell);
  }

  public getCell(index: number): Cell | null {
    return this.cells[index] || null;
  }

  public get len(): number {
    return this.cells.length;
  }
}