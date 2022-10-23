/**
 * Модель представляющая маркер клетки
 */
export default class Point {
  constructor(protected _point: boolean) {}

  
  public markIt(): void {
    this._point = !this._point;
  }

  public get point(): boolean {
    return this._point;
  }
}