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
	describe("Image Management", function() {
		it("Add A Fing", function() {
			return db.AddFing(AccountKey, sampleFing()).then(res => {
				assert.equal(123, res.id);
			});
		});

		it("Thumbnail the Image", function() {
			return db.Thumbnail(AccountKey, sampleFingId().id).then(res => {
				assert.equal(0, res);
			});
		});

		it("make phone version of the Image", function() {
			return db.Thumbnail(AccountKey, sampleFingId().id).then(res => {
				assert.equal(0, res);
			});
		});

		it("make web version", function() {
			return db.Thumbnail(AccountKey, sampleFingId().id).then(res => {
				assert.equal(0, res);
			});
		});

		it("Add A Fing with bad image", function() {
			return db.AddFing(AccountKey, missingImage()).then(res => {
				assert.equal(1234, res.id);
			});
		});

		it("Not Find the Image", function() {
			return db.Thumbnail(AccountKey, missingImage().id).then(res => {
				assert.equal(99, res);
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
		picUrl: "20170517_165305.jpg",
		thumb: "",
		place: "Freezer"
	};
}

function missingImage() {
	return {
		id: "1234",
		timestamp: 1234567890,
		picUrl: "20170517_16505.jpg",
		thumb: "",
		place: "Freezer"
	};
}

function sampleFingId() {
	return {
		id: "123"
	};
}
