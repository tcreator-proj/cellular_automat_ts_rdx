export default class Converter {

  /**
   * Конвертирует десятичное число в бинарную строку с заданным количеством бит
   * @returns 
   */
  public static toBin(biteLen: number, dec: number): string {
    let bite: string = (dec >>> 0).toString(2);
    let zeroString: string = '';
    for(let i = 0; i < biteLen - bite.length; i++) {
      zeroString += "0";
    }

    return zeroString + bite;
  }

  /**
   * Конвертирует массив бинарных чисел в десятичное число
   * @param bin {@link Array<Number>} массив чисел
   * @returns {@link Number} десятичное целое
   */
  public static toDec(bin: number[]): number {
    return Number.parseInt(bin.join(""), 2);
  }
}