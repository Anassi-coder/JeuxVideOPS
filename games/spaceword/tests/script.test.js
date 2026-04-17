// Mock du canvas nécessaire car script.js accède au DOM au chargement
document.body.innerHTML = '<canvas id="canvas"></canvas>';
Object.defineProperty(HTMLCanvasElement.prototype, 'clientWidth', { value: 800 });
Object.defineProperty(HTMLCanvasElement.prototype, 'clientHeight', { value: 600 });
HTMLCanvasElement.prototype.getContext = () => ({});

const { getRandomInt, rectIntersect, circleIntersect, timeToString } = require('../script');

// Tests fournis par le sujet
describe('getRandomInt', () => {
  test('getRandomInt(-42, 42) < 43 returns true', () => expect(getRandomInt(-42, 42)).toBeLessThan(43));
  test('getRandomInt(42, 42) returns 42', () => expect(getRandomInt(42, 42)).toBe(42));
});

describe('rectIntersect', () => {
  test('rectIntersect(1,1,2,1,4,1,1,2) returns false', () => expect(rectIntersect(1,1,2,1,4,1,1,2)).toBe(false));
  test('rectIntersect(1,1,5,2,4,1,1,2) returns true', () => expect(rectIntersect(1,1,5,2,4,1,1,2)).toBe(true));
});

describe('circleIntersect', () => {
  test('circleIntersect(3,2,1,6,1,1.5) returns false', () => expect(circleIntersect(3,2,1,6,1,1.5)).toBe(false));
  test('circleIntersect(3,2,1,3,-2,4) returns true', () => expect(circleIntersect(3,2,1,3,-2,4)).toBe(true));
});

describe('timeToString', () => {
  test('timeToString(123456789) returns "17:36:78"', () => expect(timeToString(123456789)).toBe('17:36:78'));
  test('timeToString("toto") returns "NaN:NaN:NaN"', () => expect(timeToString('toto')).toBe('NaN:NaN:NaN'));
});

// Tests supplémentaires
describe('getRandomInt - supplémentaires', () => {
  test('getRandomInt(-42, 42) >= -42', () => expect(getRandomInt(-42, 42)).toBeGreaterThanOrEqual(-42));
  test('getRandomInt(0, 0) returns 0', () => expect(getRandomInt(0, 0)).toBe(0));
  test('getRandomInt(1, 10) is an integer', () => {
    const result = getRandomInt(1, 10);
    expect(Number.isInteger(result)).toBe(true);
  });
});

describe('circleIntersect - supplémentaires', () => {
  test('circles au même endroit se touchent', () => expect(circleIntersect(0,0,5,0,0,5)).toBe(true));
  test('cercles très éloignés ne se touchent pas', () => expect(circleIntersect(0,0,1,100,100,1)).toBe(false));
});
