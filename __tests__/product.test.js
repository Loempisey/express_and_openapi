const request = require('supertest');
const app = require('./../app')


describe("Start testing ===> ", () => {
  test('=== list all products ===', async ()=>{
      const response = await request(app).get("/products")
      expect(response.statusCode)
  });

  test("=== create a new product === ", async () => {
      const res = await request(app)
      .post("/products")
      .send({
        pro_name: "danisa",
        description: "good",
        category: "cake",
        price: 10
      })
      expect(res.statusCode)
  });
  
});

