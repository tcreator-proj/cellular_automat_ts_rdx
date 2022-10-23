import Coord from "./Coord";
import Point from "./Point";
import {nanoid} from 'nanoid';

/**
 * Модель представляющая ячейку в сетке отрисовки
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

  /**
   * Помечает текущую клетку 
   * либо снимает выделение
   */
  public mark(): void {
    this._point.markIt();
  }

  /**
   * Возвращает булево значение
   * помечена клетка или нет
   * @return true - клетка помечена, иначе false
   */
  public get point(): boolean {
    return this._point.point
  }

  public get x(): number {
    return this.coord.x;
  }

  public get y(): number {
    return this.coord.y;
  }

  /**
   * Возвращает строку идентификатора ячейки
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }
}