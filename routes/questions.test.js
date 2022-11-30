import supertest from 'supertest';
import app from '../app.js'
import { expect, test} from '@jest/globals';

test('responds to get request for all questions ', async() => {
    //check the structure of the response.body
    const response = await supertest(app).get('/api/questions/');
     expect(response.status).toBe(200);
     expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
     });
         //check the structure of payload
    for(let i = 0; i<response.body.payload.length; i++) {
        const userObj = response.body.payload[i];
    
        expect(userObj).toStrictEqual({
          question_id: expect.any(Number),
          answer: expect.any(String),
          question: expect.any(String),
          topic: expect.any(String),
          topic_id: expect.any(Number),
          interactive_link: expect.any(String),
          text_link: expect.any(String),
          video_link: expect.any(String),
          wrong_answer1: expect.any(String),
          wrong_answer2: expect.any(String || null),
          wrong_answer3: expect.any(String || null)
                 
        })
       }
})