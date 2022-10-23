export default class Coord {
  constructor(protected xPoint: number, protected yPoint: number) {}

  /**
   * Модель координат для расположения клетки
   * @return {x: number, y: number}
   */
  public getCoords(): {x: number, y: number} {
    return {x: this.xPoint, y: this.yPoint};
  }

  public get x(): number {
    return this.xPoint;
  }

  public get y(): number {
    return this.yPoint;
  }
}