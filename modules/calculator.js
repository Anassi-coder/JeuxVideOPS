/**
 * Calculator module providing basic arithmetic operations.
 * @module calculator
 */

/**
 * Class representing a calculator.
 */
class Calculator {
  /**
   * Adds two numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @return {number} The sum of a and b.
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtracts b from a.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @return {number} The difference of a and b.
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiplies two numbers.
   * @param {number} a - The first number.
   * @param {number} b - The second number.
   * @return {number} The product of a and b.
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divides a by b.
   * @param {number} a - The dividend.
   * @param {number} b - The divisor.
   * @return {number} The quotient of a divided by b.
   * @throws {Error} Throws an error if b is zero.
   */
  divide(a, b) {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  }

  /**
   * Raises a to the power of b.
   * @param {number} a - The base.
   * @param {number} b - The exponent.
   * @return {number} a raised to the power of b.
   */
  power(a, b) {
    if (b < 0) return 1 / a * this.power(a, b + 1);
    else if (b > 0) return a * this.power(a, b - 1);
    else return 1;
  }
}

module.exports = Calculator;
