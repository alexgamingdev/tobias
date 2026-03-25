const request = require('supertest');
const app = require('./index');

describe('GET /help/get/girlfriend', () => {
  it('should redirect to https://tinder.com/', async () => {
    const res = await request(app).get('/help/get/girlfriend');
    expect(res.status).toBe(302);
    expect(res.headers.location).toBe('https://tinder.com/');
  });
});
