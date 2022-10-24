import { Engine } from "../linear-engine/Engine";
import Coord from "./Coord";
import Field from "./Field";

export default class FieldSet {
  protected fieldSet: Field[] = [];

  /**
   * Класс для построения и хранения всех классов Field
   * для предпросмотра
   * @param row {number} - количество линий 
   * @param col {number} - количество столбцов
   */
  constructor(protected row: number, protected col: number) {
    this.build()
  }
  
  
  protected build(): void {
    const BITE: number = 255;
    for(let i = 0; i <= BITE; i++) {
      const field: Field = new Field(this.row, this.col, false);
      // просто ставит точку для начала построения карты 
      field.setPountMap([new Coord(0, 15)]);
      const engine: Engine = new Engine(field, i);
      this.fieldSet.push(engine.run());
    }
  }

  get fields(): Field[] {
    return this.fieldSet;
  }
}