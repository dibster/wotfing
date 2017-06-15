const server = "http://localhost:8080";

let chai = require("chai");
let chaiHttp = require("chai-http");
let should = chai.should();

chai.use(chaiHttp);

let Account = {};
let accountKey = "";

describe("API Tests", function() {
	describe("Fing", function() {
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
					// set key for next run
					accountKey = res.body.key;
					res.body.should.have.property("created").eql(true);
					done();
				});
		});

		it("should add a fing to an account", done => {
			chai
				.request(server)
				.put("/fings")
				.send(sampleFing())
				.set("Authorization", accountKey)
				.end((err, res) => {
					console.log("err : " + err);
					console.log("res : " + JSON.stringify(res.body));

					res.should.have.status(200);
					res.body.should.be.a("object");
					res.body.should.have.property("id");
					res.body.should.have.property("timestamp");
					done();
				});
		});

		it("should list fings", done => {
			chai
				.request(server)
				.get("/fings")
				.set("Authorization", accountKey)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.be.a("array");
					// TODO, set length check here for one
					done();
				});
		});
	});
});

function getRandomUser() {
	let emailTest = "test" + getRandomInt(1, 10000000) + "@test.com";
	let passwordTest = "password" + getRandomInt(1, 100000000);
	return { email: emailTest, password: passwordTest };
}

function sampleFing() {
	return {
		id: "123",
		timestamp: 1234567890,
		picUrl: "./pic.jpg",
		thumb: "",
		place: "Freezer"
	};
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
