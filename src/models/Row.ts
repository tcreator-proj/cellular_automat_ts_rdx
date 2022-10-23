import {Cell} from "./Cell";
import {nanoid} from 'nanoid';

/**
 * Модель построения структуры поля ячеек представляющий 
 * линию. 
 * Структурно Cell[]
 */
export class Row {
  protected _cells: Cell[];
  protected _id: string;

  constructor() {
    this._cells = [];
    this._id = nanoid();
  }

  /**
   * Добавляет в массив ячеек {@link Cell}
   * @param cell 
   */
  public appendCell(cell: Cell): void {
    this.cells.push(cell);
  }

  /**
   * Возвращает экземпляр ячейки
   * @param index индекс в массиве ячеек
   * @returns {@link Cell} или null 
   */
  public getCell(index: number): Cell | null {
    return this._cells[index] || null;
  }

  /**
   * Возвращает ссылку на весь массив ячеек. 
   * Мутабельно
   * @return {@link Array<Cell>}
   */
  public get cells(): Cell[] {
    return this._cells;
  }

  /**
   * Возвращает длину массива ячеек
   * @return number
   */
  public get len(): number {
    return this._cells.length;
  }

  /**
   * Возвращает идентификатор линии
   * @return {string}
   */
  public get id(): string {
    return this._id;
  }

  /**
   * Принимает первый и последний индекс триады. 
   * Берёт из массива клеток
   * Закольцовывает массив.
   * Преобразовывает смерть клетки как 0, жизнь как 1
   * Возвращает бинарную триаду
   * @param start {@link Number}
   * @param end {@link Number}
   * @returns {@link Array<number>} [start, start + 1, end]
   */
  public getBinaryTriad(start: number, end: number): number[] {
    let left = start;
    let right = end;
    const cells: Cell[] = this._cells;
    if(right > this.len - 1) {
      right = right - this.len;
    }

    return [
      Number(cells.at(left)?.point),
      Number(cells.at(left + 1)?.point),
      Number(cells.at(right)?.point),
    ] 
  }
}