const app = require("../server.js");
const request = require('supertest');

describe("Test Country ISO API", () => {
    test("when passed GB returns United Kingdom", (done) => {
      request(app)
      .get('/country/GB')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(function(resp){
        expect(resp.body.GB).toBe("United Kingdom")
        done()  
      })
      
    })
}) 