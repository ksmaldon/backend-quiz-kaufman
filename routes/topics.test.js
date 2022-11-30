import supertest from 'supertest';
import app from '../app.js'
import { expect, test} from '@jest/globals';


test.skip('responds to get request for all topics ', async() => {
    //check the structure of the response.body
    const response = await supertest(app).get('/api/topics');
     expect(response.status).toBe(200);
     expect(response.body).toStrictEqual({
      success: true,
      payload: expect.any(Array),
     });
         //check the structure of payload
    for(let i = 0; i<4; i++) {
        const userObj = response.body.payload[i];
    
        expect(userObj).toStrictEqual({
          topic_id: expect.any(Number),
          topic: expect.any(String),
          text_link: expect.any(String),
          video_link: expect.any(String),
          interactive_link: expect.any(String)
        
        })
       }
})
// test('get request for a user using a non-existing username', async() => {
//     const response = await supertest(app).get('/users?username=jackma')
//     expect(response.status).toBe(200);
//     expect(response.body.success).toBeFalsy;
//     expect(typeof response.body.payload).toBeUndefined;
// })

// check get request for a user by id
// test('get request for a user by id', async() => {
//     const response = await supertest(app).get('/users/125')
//     expect(response.status).toBe(200);
//     expect(response.body.success).toBeTruthy;
//     expect(response.body.payload.id).toBe(125);
// })


// check post user reqest
test.skip('post topic request', async() => {
    const payload = {topic_id: 1,
    "topic": "React",
    "text_link": "https://www.w3schools.com/REACT/DEFAULT.ASP",
    "video_link": "https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified",
    "interactive_link": "https://www.freecodecamp.org/news/tag/react/"
    };
   
    const response = await supertest(app)
    .post('/api/topics')
    .send(payload)
    .set('Accept', 'application/json')
   
    expect(response.status).toBe(200)
    expect(response.body.success).toBeTruthy
    expect(response.body.payload.length).toEqual(1)

    //check response data:
    expect(response.body.payload[0].topic).toMatch("React")
    expect(response.body.payload[0].video_link).toMatch('https://www.youtube.com/watch?v=hQAHSlTtcmY&ab_channel=WebDevSimplified')
    expect(response.body.payload[0].interactive_link).toMatch('https://www.freecodecamp.org/news/tag/react/')
      
    })

// check delete topic by id request
// test(`delete topic by id request`, async() => {
//     const idToDelete = 1
//     const url = `/api/topics/${idToDelete}`
//     const response = await supertest(app).delete(url)

//     expect(response.status).toBe(200)
//     expect(response.body).toStrictEqual({
//         success: true,
//         payload: idToDelete         
//         })
//     })