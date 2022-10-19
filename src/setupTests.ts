// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import RuleMap from './models/RuleMap';
import Converter from './utills/Converter';

describe('Converter test', () => { 
  test("Converting from dec to binary string", () => {
    expect(Converter.toBin(8, 10)).toBe("00001010")
  })
  
  test("Converting from dec to binary got wrong string", () => {
    expect(Converter.toBin(8, 10)).not.toBe("00011010")
  })

  test("Converting from dec to binary with max count", () => {
    expect(Converter.toBin(8, 255)).toBe("11111111")
  })

  test("Converting from dec to binary with min count", () => {
    expect(Converter.toBin(8, 0)).toBe("00000000")
  })
 })

 describe('RuleMap tests', () => { 
  test("Test rule 40", () => {
    const ruleMap: RuleMap = new RuleMap(40);
    expect(ruleMap.equalWithRule([1,0,0])).toBeTruthy();
  })

  test("Test rule 40 with wrong equal", () => {
    const ruleMap: RuleMap = new RuleMap(40);
    expect(ruleMap.equalWithRule([1,1,0])).toBeTruthy();
  })
 })


