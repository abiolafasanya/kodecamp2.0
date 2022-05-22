import chai from "chai";
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

const expect = chai.expect;


describe("Ecommerce Test", function () {
    // test if api is running
    it("should return a 200 response", function (done) {
        chai.request("http://localhost:4000")
            .get("/")
            .end(function (err, res) {
                expect(res.status).to.equal(200);
                done();
            });
    });

    // test register user
    it("should return a 201 response for register route", function (done) {
        chai.request("http://localhost:4000")
            .post("/user/register")
            .send({
                "firstname": "test",
                "lastname": "test",
                "email": "test0@gmail.com",
                "password": "test0@12345",
                "confirm_password": "test0@12345"
            })
            .end(function (err, res) {
                expect(res.status).to.equal(201);
                done();
            });
    });

    //test loginValidation
    it("should return a 200 response for login route", function (done) {
        chai.request("http://localhost:4000")
            .post("/user/login")
            .send({
                "email": "test0@gmail.com",
                "password": "test0@12345"
            })
            .then(function (res) {
                expect(res).to.have.cookie('token')
                done()
            })
            .then(function (err, res) {
                expect(res.status).to.equal(200);
                done();
            });
    });

    // test refreshToken
    // it("should return a 200 response", function (done) {
    //     chai.request("http://localhost:4000")
    //         .post("/user/refreshToken")
    //         .send({
    //             "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNjY0MzEzYzgxYjYzNzA1MjQyMmYyYiIsImlhdCI6MTU0NzMxODQ3NX0.rq0K6W8-G_J1R_fN6-p_5b5Z5KV7fR5ZSXp7-n_yh4k"
    //         })
    //         .end(function (err, res) {
    //             expect(res.status).to.equal(200);
    //             done();
    //         });
    // });

    // test get user details
    // it("should return a 200 response", function (done) {
    //     chai.request("http://localhost:4000")
    //         .get("/user/me")
    //         .end(function (err, res) {
    //             expect(res.status).to.equal(200);
    //             done();
    //         });
    // });

    // test add product
    // it("should return a 200 response", function (done) {
    //     chai.request("http://localhost:4000")
    //         .post("/product/add")
    //         .send({
    //             "title": "test",
    //             "description": "test",
    //             "price": "test",
    //             "quantity": "test"
    //         })
    //         .end(function (err, res) {
    //             expect(res.status).to.equal(200);
    //             done();
    //         });
    // });

    // test get product
    // it("should return a 200 response", function (done) {
    //     chai.request("http://localhost:4000")
    //         .get("/product/get")
    //         .end(function (err, res) {
    //             expect(res.status).to.equal(200);
    //             done();
    //         });
    // });

 
});
