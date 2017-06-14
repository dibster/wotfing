var assert = require("assert");
require("app-module-path").addPath("/users/dave/github/wotfing/api/modules");
const utils = require("utils.js");
const db = require("db.js");

let AccountKey = "";

before(function() {
	return db
		.CreateAccount({ email: "test@test.com333", password: "qwepoi23" })
		.then(res => {
			console.log("in start");
			AccountKey = res.key;
		});
});

describe("Database Tests", function() {
	describe("Data Management", function() {
		it("should add a new fing", function() {
			return db.AddFing(AccountKey, sampleFing()).then(res => {
				assert.equal(sampleFingId().id, res.id);
				assert.equal("number", typeof res.timestamp);
			});
		});

		it("should read a fing", function() {
			return db.GetFing(AccountKey, sampleFingId()).then(res => {
				assert.equal("123", res.id);
			});
		});

		it("should list all fings", function() {
			return db.GetAllFings(AccountKey).then(res => {
				assert.equal(1, res.length);
			});
		});

		it("should delete a fing and send to archive", function() {
			return db.RemoveFing(AccountKey, sampleFingId()).then(res => {
				assert.equal(0, res);
			});
		});

		it("should empty DB", function() {
			return db.Empty();
		});
	});
});

function sampleFing() {
	return {
		id: "123",
		timestamp: 1234567890,
		picUrl: "./pic.jpg",
		thumb: "",
		place: "Freezer"
	};
}
function sampleFingId() {
	return {
		id: "123"
	};
}
