import supertest from 'supertest';
import app from '../app.js'
import { expect, test} from '@jest/globals';

test('responds to get request for all questions ', async() => {
    //check the structure of the response.body
    const response = await supertest(app).get('/api/questions');
     expect(response.status).toBe(200);
     expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
     });
         //check the structure of payload
    // for(let i = 0; i<4; i++) {
    //     const userObj = response.body.payload[i];
    
    //     expect(userObj).toStrictEqual({
    //       topic_id: expect.any(Number),
    //       topic: expect.any(String),
    //       text_link: expect.any(String),
    //       video_link: expect.any(String),
    //       interactive_link: expect.any(String)
        
    //     })
    //    }
})