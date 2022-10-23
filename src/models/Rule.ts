import Converter from "../utills/Converter";

export default class Rule {
  protected currentRuleMap: number[];

  constructor(rule: number) {
    const binStr: string = Converter.toBin(8, rule);
    this.currentRuleMap = binStr.split("").map((lit: string) => Number(lit)).reverse();
  }

  public equalWithRule(triad: number[]): boolean {
    return !!this.currentRuleMap[Converter.toDec(triad)];
  }
}
