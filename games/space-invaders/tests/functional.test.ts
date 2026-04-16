import { createEnemy, advanceEnemy, getValue, Type } from '../src/ts/enemy';
import { distance } from '../src/ts/math/polar-vector';
import { normalize, add } from '../src/ts/math/vector';
import { ENEMY_SIZE, PROJECTILE_SIZE, WORLD_SIZE } from '../src/ts/config';

// Test 1 : un ennemi Basic se rapproche du centre après avancement
describe('Enemy Basic - mouvement vers le centre', () => {
  test("le rayon d'un ennemi Basic diminue après advanceEnemy", () => {
    const enemy = createEnemy(Type.Basic, { angle: 0, radius: 500 });
    const initialRadius = enemy.position.radius;
    advanceEnemy({ enemy, deltaTime: 0.1 });
    expect(enemy.position.radius).toBeLessThan(initialRadius);
  });
});

// Test 2 : un ennemi Spinner tourne en avançant
describe('Enemy Spinner - rotation en avançant', () => {
  test("l'angle d'un ennemi Spinner change après advanceEnemy", () => {
    const enemy = createEnemy(Type.Spinner, { angle: 0, radius: 500 });
    const initialAngle = enemy.position.angle;
    advanceEnemy({ enemy, deltaTime: 0.1 });
    expect(enemy.position.angle).not.toBe(initialAngle);
  });
});

// Test 3 : détection de collision entre projectile et ennemi
describe('Collision projectile / ennemi', () => {
  test('collision détectée quand la distance est inférieure à la somme des tailles', () => {
    const projectile = { angle: 0, radius: 300 };
    const enemy = createEnemy(Type.Basic, { angle: 0, radius: 300 });
    const dist = distance(projectile, enemy.position);
    expect(dist).toBeLessThan(PROJECTILE_SIZE + ENEMY_SIZE);
  });

  test('pas de collision quand projectile et ennemi sont éloignés', () => {
    const projectile = { angle: 0, radius: 100 };
    const enemy = createEnemy(Type.Basic, { angle: Math.PI, radius: 500 });
    const dist = distance(projectile, enemy.position);
    expect(dist).toBeGreaterThan(PROJECTILE_SIZE + ENEMY_SIZE);
  });
});

// Test 4 : valeurs de points par type d'ennemi
describe('Points par type d ennemi', () => {
  test('Basic rapporte 5 points', () => expect(getValue(Type.Basic)).toBe(5));
  test('Spinner rapporte 10 points', () => expect(getValue(Type.Spinner)).toBe(10));
  test('ZigZag rapporte 15 points', () => expect(getValue(Type.ZigZag)).toBe(15));
  test('Oscillator rapporte 20 points', () => expect(getValue(Type.Oscillator)).toBe(20));
});

// Test 5 : pipeline math — normaliser puis additionner deux vecteurs
describe('Pipeline math - normalize + add', () => {
  test('normaliser un vecteur puis l additionner avec lui-même double sa norme', () => {
    const v = normalize({ x: 3, y: 4 });
    const result = add({ ...v }, { ...v });
    expect(result.x).toBeCloseTo(v.x * 2);
    expect(result.y).toBeCloseTo(v.y * 2);
  });
});
