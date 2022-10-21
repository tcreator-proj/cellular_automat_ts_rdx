import Field from "../models/Field";
import { Row } from "../models/Row";
import Rule from "../models/Rule";

/**
 * Класс итератор поля
 */
export class Engine {
  protected renderBoard: Field;
  protected fromRow!: number;
  protected fromCell!: number;
  protected currentCell!: number;
  protected toCell!: number;
  protected toRow!: number;

  protected ruleMap: Rule;

  constructor(renderBoard: Field, rule: number) {
    this.renderBoard = renderBoard;
    this.initializeCellCounters();
    this.initializeRowCounters();

    this.ruleMap = new Rule(rule);
  }

  private initializeCellCounters(): void {
    this.fromCell = -1;
    this.currentCell = 0;
    this.toCell = this.renderBoard.getRow(0).len;
  }

  private initializeRowCounters(): void {
    this.fromRow = 0;
    this.toRow = this.renderBoard.len;
  }

  private incrementCellStep(): void {
    this.currentCell++;
    this.fromCell++;
  }

  private incrementRowStep(): void {
    this.fromRow++;
  }

  /**
   * Делает шаг по полю клеток маркируя соответствующие правилу клетки.
   * @returns {@link Boolean} true - цикд не окончен, иначе false 
   */
  public step(): boolean[] {

    let mark: boolean = false;

    // цикл крутит до ближайшей проставляемой точки.
    while (this.fromRow !== this.toRow - 1) {
      // первая линия с которой снимаем последовательности байт по триаде
      const tmpRow: Row = this.renderBoard.getRow(this.fromRow);
      // куда прокидываем 
      const newxtRow: Row = this.renderBoard.getRow(this.fromRow + 1);

      // получаем триаду бинарных чисел от клеток на поле
      const binaryTriad: number[] = tmpRow.getBinaryTriad(this.fromCell, this.fromCell + 2);

      // получаем результат сравнения триады с картой правила
      const equalWithRule = this.ruleMap.equalWithRule(binaryTriad);

      // если жив - маркируем 

      if (equalWithRule) {
        mark = true;
        newxtRow.getCell(this.currentCell)?.mark();
      }

      // + стартовая точка триады
      this.incrementCellStep();

      // Если точка маркера следуюзей клетки достигла конца линии сбрасываем *Cell счётчики
      // увеличиваем счётчик текущей линии
      if (this.currentCell === this.toCell) {
        this.initializeCellCounters()
        this.incrementRowStep();
      }

      if (mark) break;
    }

    // если текущая линия равна последней - кидаем конец цикла
    if (this.fromRow === this.toRow - 1) {
      return [mark, false];
    }

    return [mark, true];
  }

  /**
   * Полностью строит поле
   * @returns {@link Fiedl}
   */
  public run(): Field {
    while (this.fromRow !== this.toRow - 1) {
      const tmpRow: Row = this.renderBoard.getRow(this.fromRow);
      const newxtRow: Row = this.renderBoard.getRow(this.fromRow + 1);

      const binaryTriad: number[] = tmpRow.getBinaryTriad(this.fromCell, this.fromCell + 2);

      const equalWithRule = this.ruleMap.equalWithRule(binaryTriad);

      if (equalWithRule) {
        newxtRow.getCell(this.currentCell)?.mark();
      }
      this.incrementCellStep();

      if (this.currentCell === this.toCell) {
        this.initializeCellCounters()
        this.incrementRowStep();
      }

      if (this.fromRow === this.toRow - 1) {
        break;
      }
    }

    return this.renderBoard;
  }
}