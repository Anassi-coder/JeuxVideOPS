const request = require('supertest');
const {app, server} = require('../../index');

afterAll(() => server.close());

describe('GET /add', () => {
  test('returns correct sum', async () => {
    const res = await request(app).get('/add?a=2&b=3');
    expect(res.status).toBe(200);
    expect(res.text).toContain('5');
  });
});

describe('GET /sub', () => {
  test('returns correct difference', async () => {
    const res = await request(app).get('/sub?a=10&b=4');
    expect(res.status).toBe(200);
    expect(res.text).toContain('6');
  });
});

describe('GET /mult', () => {
  test('returns correct product', async () => {
    const res = await request(app).get('/mult?a=3&b=4');
    expect(res.status).toBe(200);
    expect(res.text).toContain('12');
  });
});

describe('GET /div', () => {
  test('returns correct quotient', async () => {
    const res = await request(app).get('/div?a=10&b=2');
    expect(res.status).toBe(200);
    expect(res.text).toContain('5');
  });

  test('returns 400 on division by zero', async () => {
    const res = await request(app).get('/div?a=5&b=0');
    expect(res.status).toBe(400);
  });
});

describe('GET /pow', () => {
  test('returns correct power', async () => {
    const res = await request(app).get('/pow?a=2&b=3');
    expect(res.status).toBe(200);
    expect(res.text).toContain('8');
  });
});
