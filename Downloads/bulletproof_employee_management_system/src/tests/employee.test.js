const request = require('supertest');
const app = require('../config/server');  // Import your server setup

describe('Employee Routes', () => {
  it('should add a new employee', async () => {
    const res = await request(app)
      .post('/api/employees')
      .send({
        name: 'John Doe',
        position: 'Developer',
        department: 'Engineering',
        salary: 60000,
      });
    expect(res.status).toBe(201);  // Check if employee was created
    expect(res.body.name).toBe('John Doe');  // Validate response
  });

  it('should fetch all employees', async () => {
    const res = await request(app).get('/api/employees');
    expect(res.status).toBe(200);  // Check if employees are fetched
    expect(res.body.length).toBeGreaterThan(0);  // Validate that there is at least one employee
  });
});
