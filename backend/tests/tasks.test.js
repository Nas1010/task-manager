import request from 'supertest';
import app from './server.js'
import { describe, it } from 'vitest';

describe('Task API', () => {
    let taskId;

    //Test for Get all tasks
    it('should return all tasks', async () => {
        const res = await request(app).get('/api/tasks');

        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true)
    });

    //Test for Get task by ID  

    it('should return a task for an existing ID', async () => {
        const validId = '66b3d28a-fde6-46d7-ba7c-85778de02b35'; 
        const res = await request(app).get(`/api/tasks/${validId}`);
        
        expect(res.status).toBe(200);  
        expect(res.body).toHaveProperty('id', validId);  
        expect(res.body).toHaveProperty('title');
        expect(res.body).toHaveProperty('description');
      });
      
    //Test for Post request
    it('should create a task', async () => { 
        const res = await request(app)
            .post('/api/tasks')
            .send({
                title: 'Testing POST request',
                description: 'Testing task creation',
                status: 'pending',
                due_date: '2025-05-01T12:00:00',
            });
  
        expect(res.status).toBe(201);
        expect(res.body.title).toBe('Testing POST request');
        taskId = res.body.id;  
    });

    //Test for PUT request

    it('should update the task status', async () => {
        const res = await request(app)
          .put(`/api/tasks/${taskId}/status`)
          .send({ status: 'completed' });
    
        expect(res.status).toBe(200);
        expect(res.body.status).toBe('completed');
    });
    
    // Test for DELETE request
    it('should delete a task', async () => {
        const res = await request(app)
            .delete(`/api/tasks/${taskId}`);
    
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Task deleted');
    });
})