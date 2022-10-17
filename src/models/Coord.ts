export default class Coord {
  constructor(protected xPoint: number, protected yPoint: number) {}

  public get x(): number {
    return this.xPoint;
  }

  public get y(): number {
    return this.yPoint;
  }
}