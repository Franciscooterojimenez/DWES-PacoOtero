import request from 'supertest';
import app from '../src/app';

describe('Notes API', () => {
  describe('POST /notes', () => {
    it('should create a new note', async () => {
      const noteData = { title: 'test note', content: 'This is a test note.' };
      const response = await request(app).post('/notes').send(noteData);
      expect(response.statusCode).toBe(201);
      expect(response.body.noteName).toBe(noteData.title);
    });
  });

  describe('PATCH /notes/:noteName', () => {
    it('should update the content of an existing note', async () => {
      const newContent = { content: 'This is the updated content.' };
      const response = await request(app).patch('/notes/test_note').send(newContent);
      expect(response.statusCode).toBe(200);
    });
  });

  describe('PATCH /notes/:noteName/name', () => {
    it('should update the name of an existing note', async () => {
      const newName = { title: 'newName' };
      const response = await request(app).patch('/notes/test_note/name').send(newName);
      expect(response.statusCode).toBe(200);
    });
  });

  describe('GET /notes/:noteName', () => {
    it('should retrieve a single note', async () => {
      const response = await request(app).get('/notes/newName');
      expect(response.statusCode).toBe(200);
      expect(response.body.noteName).toBe('newName');
    });
  });

  describe('GET /notes', () => {
    it('should retrieve all notes', async () => {
      const response = await request(app).get('/notes');
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('DELETE /notes/:noteName', () => {
    it('should delete a note', async () => {
      const response = await request(app).delete('/notes/newName');
      expect(response.statusCode).toBe(200);
    });
  });
});