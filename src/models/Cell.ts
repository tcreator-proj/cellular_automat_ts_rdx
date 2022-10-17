import Coord from "./Coord";
import Point from "./Point";


/**
 * Cell
 */
export default class Cell {
  protected coord: Coord;
  protected point: Point;

  constructor(coordinate: Coord, mark: boolean) {
    this.coord = coordinate;
    this.point = new Point(mark);
  }

  public mark(): void {
    this.point.markIt();
  }
}