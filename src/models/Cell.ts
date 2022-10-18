import Coord from "./Coord";
import Point from "./Point";
import {nanoid} from 'nanoid';

/**
 * Cell
 */
export class Cell {
  protected coord: Coord;
  protected _point: Point;
  protected _id: string;

  constructor(coordinate: Coord, mark: boolean) {
    this.coord = coordinate;
    this._point = new Point(mark);
    this._id = nanoid()
  }

  public mark(): void {
    this._point.markIt();
  }

  public get point(): boolean {
    return this._point.point
  }

  public get x(): number {
    return this.coord.x;
  }

  public get y(): number {
    return this.coord.y;
  }

  public get id() {
    return this._id;
  }
}