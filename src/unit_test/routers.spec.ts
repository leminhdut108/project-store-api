import { app } from '../app';
import supertest from 'supertest';

const request = supertest(app);

const authTokenFail = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlkIjoyLCJpYXQiOjE2OTA0NDIwNTksImV4cCI6MTY5MDYxNDg1OX0.bwR_B5vFPicBQtQ3fwiEbRVbZnCQeCNkMUKr4cqEHQc';
const authTokenAdmin = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpZCI6MSwiaWF0IjoxNjk2OTMwNjA4fQ.ktMFersCLJQ7ausQulXQIkuCtxotfKP4DJx1RohjF4Y';
const authTokenUser = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidXNlciIsImlkIjoyLCJpYXQiOjE2OTY5MzA4OTF9.jRSp45X5_Ime1ZhfdqB8SDvN7naKW_cJJJc9mcB80aQ';

describe('Test API endpoint', () => {
  it('1: case not found', async () => {
    const response = await request.get('/');
    expect(response.statusCode).toEqual(404);
  });

  it('2: case signup fail - miss user name', async () => {
    const response = await request.post('/api/user/signup').send({
      first_name: 'Long Vi',
      last_name: 'Dang'
    });
    expect(response.statusCode).toEqual(400);
  });

  it('3: case signup success', async () => {
    const response = await request.post('/api/user/signup').send({
      user_name: 'userTest',
      password: 'admin1234',
      first_name: 'Shen',
      last_name: 'Zhen'
    });
    expect(response.statusCode).toEqual(200);
  });

  it('4: case login success', async () => {
    const response = await request.post('/api/user/login').send({
      user_name: 'userTest',
      password: 'admin1234'
    });
    expect(response.statusCode).toEqual(200);
  });

  it('5: case login fail', async () => {
    const response = await request.post('/api/user/login').send({
      user_name: 'user',
      password: 'admin1234'
    });
    expect(response.statusCode).toEqual(400);
  });

  it('6: case get product List', async () => {
    const response = await request.get('/api/products');
    expect(response.statusCode).toEqual(200);
  });

  it('7: case get product by id', async () => {
    const response = await request.get('/api/product/1');
    expect(response.statusCode).toEqual(200);
  });

  it('8: case get product by category: Car', async () => {
    const response = await request.get('/api/products?category=Car');
    expect(response.statusCode).toEqual(200);
  });

  it('9: case create product fail: by token', async () => {
    const response = await request
      .post('/api/product')
      .set({
        Authorization: authTokenFail
      })
      .send({
        name: 'laptop lenovo',
        price: 300
      });
    expect(response.statusCode).toEqual(401);
  });

  it('10: case create product by admin', async () => {
    const product = {
      name: 'honda sh 150cc',
      price: 4000
    };

    const response = await request
      .post('/api/product')
      .set({
        Authorization: authTokenAdmin
      })
      .send(product);

    expect(response.statusCode).toEqual(200);
    expect(response.body.message).toEqual("success");
    expect(response.body.new_product).toEqual({
      ...product,
      id: 7
    });
  });

  it('11: case get order by user', async () => {
    const response = await request.get('/api/orders').set({
      Authorization: authTokenUser
    });
    expect(response.statusCode).toEqual(200);
  });

  it('12: case signup fail - miss passwork', async () => {
    const response = await request.post('/api/user/signup').send({
      first_name: 'xxxx',
      last_name: 'yyyy',
      user_name: "ahihi"
    });
    expect(response.statusCode).toEqual(400);
  });

});
