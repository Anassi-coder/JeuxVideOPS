const Calculator = require('../../modules/calculator');

const calc = new Calculator();

describe('Calculator - add', () => {
  test('adds 2 + 3 = 5', () => expect(calc.add(2, 3)).toBe(5));
  test('adds -1 + 1 = 0', () => expect(calc.add(-1, 1)).toBe(0));
  test('adds 0 + 0 = 0', () => expect(calc.add(0, 0)).toBe(0));
});

describe('Calculator - subtract', () => {
  test('subtracts 5 - 3 = 2', () => expect(calc.subtract(5, 3)).toBe(2));
  test('subtracts 3 - 5 = -2', () => expect(calc.subtract(3, 5)).toBe(-2));
});

describe('Calculator - multiply', () => {
  test('multiplies 3 * 4 = 12', () => expect(calc.multiply(3, 4)).toBe(12));
  test('multiplies -2 * 3 = -6', () => expect(calc.multiply(-2, 3)).toBe(-6));
  test('multiplies 0 * 5 = 0', () => expect(calc.multiply(0, 5)).toBe(0));
});

describe('Calculator - divide', () => {
  test('divides 10 / 2 = 5', () => expect(calc.divide(10, 2)).toBe(5));
  test('divides 7 / 2 = 3.5', () => expect(calc.divide(7, 2)).toBe(3.5));
  test('throws on division by zero', () => {
    expect(() => calc.divide(5, 0)).toThrow('Division by zero');
  });
});

describe('Calculator - power', () => {
  test('2 ^ 3 = 8', () => expect(calc.power(2, 3)).toBe(8));
  test('2 ^ 0 = 1', () => expect(calc.power(2, 0)).toBe(1));
  test('2 ^ -1 = 0.5', () => expect(calc.power(2, -1)).toBeCloseTo(0.5));
});
