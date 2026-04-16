import { clamp, lerp } from '../src/ts/math/math';
import { distance, toVector } from '../src/ts/math/polar-vector';
import { normalize, dot, add, subtract } from '../src/ts/math/vector';

// Tests fournis par le sujet
describe('clamp', () => {
  test('clamp(1,10,2) returns 2', () => expect(clamp(1, 10, 2)).toBe(2));
  test('clamp(1,10,-12) returns 1', () => expect(clamp(1, 10, -12)).toBe(1));
});

describe('lerp', () => {
  test('lerp(1,10,2) returns 19', () => expect(lerp(1, 10, 2)).toBe(19));
  test('lerp(1,10,-12) returns -107', () => expect(lerp(1, 10, -12)).toBe(-107));
});

describe('distance', () => {
  test('distance({angle:5,radius:50},{angle:10,radius:100}) returns 98.30248290540649', () =>
    expect(distance({ angle: 5, radius: 50 }, { angle: 10, radius: 100 })).toBeCloseTo(98.30248290540649));
  test('distance({angle:5,radius:50},{angle:-10,radius:100}) returns 141.76346189546945', () =>
    expect(distance({ angle: 5, radius: 50 }, { angle: -10, radius: 100 })).toBeCloseTo(141.76346189546945));
});

describe('toVector', () => {
  test('toVector({angle:5,radius:50},{angle:10,radius:100})', () => {
    const result = toVector({ angle: 5, radius: 50 });
    expect(result.x).toBeCloseTo(14.183109273161312);
    expect(result.y).toBeCloseTo(-47.946213733156924);
  });
});

describe('normalize', () => {
  test('normalize({x:5,y:50})', () => {
    const result = normalize({ x: 5, y: 50 });
    expect(result.x).toBeCloseTo(0.09950371902099892);
    expect(result.y).toBeCloseTo(0.9950371902099892);
  });
});

describe('dot', () => {
  test('dot({x:5,y:50},{x:10,y:100}) returns 5050', () =>
    expect(dot({ x: 5, y: 50 }, { x: 10, y: 100 })).toBe(5050));
});

describe('add', () => {
  test('add({x:5,y:50},{x:10,y:100}) returns {x:15,y:150}', () =>
    expect(add({ x: 5, y: 50 }, { x: 10, y: 100 })).toEqual({ x: 15, y: 150 }));
});

describe('subtract', () => {
  test('subtract({x:5,y:50},{x:10,y:100}) returns {x:-5,y:-50}', () =>
    expect(subtract({ x: 5, y: 50 }, { x: 10, y: 100 })).toEqual({ x: -5, y: -50 }));
});

// 5 tests supplémentaires rédigés par nos soins
describe('clamp - tests supplémentaires', () => {
  test('clamp(0,100,50) returns 50 (valeur dans la plage)', () => expect(clamp(0, 100, 50)).toBe(50));
  test('clamp(0,100,200) returns 100 (valeur au-dessus du max)', () => expect(clamp(0, 100, 200)).toBe(100));
});

describe('lerp - tests supplémentaires', () => {
  test('lerp(0,10,0.5) returns 5 (milieu)', () => expect(lerp(0, 10, 0.5)).toBe(5));
  test('lerp(0,10,0) returns 0 (début)', () => expect(lerp(0, 10, 0)).toBe(0));
  test('lerp(0,10,1) returns 10 (fin)', () => expect(lerp(0, 10, 1)).toBe(10));
});
