const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

const app = require("../app").app;

describe("Suite de pruebas auth", () => {
  it("should return 401 when isn't the jwt token", (done) => {
    // Cuando la llamada no tiene correctamente la llave
    chai
      .request(app)
      .get("/team")
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 401);
        done();
      });
  });
  it("should return 200 when is a valid jwt token", (done) => {
    // Cuando la llamada no tiene correctamente la llave
    chai
      .request(app)
      .post("/login")
      .set("Authorization", `JWT ${res.body.token}`)
      .end((err, res) => {
        chai.assert.equal(res.statusCode, 200);
        done();
      });
    // chai
    //   .request(app)
    //   .get("/team")
    //   .set("Authorization", "JWT token")
    //   .end((err, res) => {
    //     chai.assert.equal(res.statusCode, 200);
    //     done();
    //   });
  });
});
