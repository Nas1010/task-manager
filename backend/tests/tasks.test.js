import request from 'supertest';
import app from './server.js'
import { describe, it } from 'vitest';

describe('Task API', () => {
    it('should return all tasks', async () => {
        const res = await request(app).get('/api/tasks');

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true)
    })
})