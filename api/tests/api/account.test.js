const server = "http://localhost:8080";

let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();

chai.use(chaiHttp);

let Account = {};

describe("API Tests", function() {
	describe("Account", function() {
		it("should Create a New Account", done => {
			Account = getRandomUser();
			chai
				.request(server)
				.post("/account/register")
				.send(Account)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a("object");
					res.body.should.have.property("message");
					res.body.should.have.property("key");
					res.body.should.have.property("created").eql(true);
					done();
				});
		});

		it("should say account already exists", done => {
			chai
				.request(server)
				.post("/account/register")
				.send(Account)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.be.a("object");
					res.body.should.have.property("message");
					res.body.should.have.property("created").eql(false);
					done();
				});
		});

		it("should login", done => {
			chai
				.request(server)
				.post("/account/login")
				.send(Account)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a("object");
					res.body.should.have.property("key");
					done();
				});
		});
	});
});

function getRandomUser() {
	let emailTest = "test" + getRandomInt(1, 1000) + "@test.com";
	let passwordTest = "password" + getRandomInt(1, 1000);
	return { email: emailTest, password: passwordTest };
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
