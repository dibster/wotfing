var assert = require("assert");
require("app-module-path").addPath("/users/dave/github/wotfing/api/modules");
const utils = require("utils.js");
const db = require("db.js");

before(function() {
	return db.Empty();
});

describe("Database Tests", function() {
	describe("Account", function() {
		it("should Create a New Account", function() {
			return db
				.CreateAccount({ email: "test@test.com", pwd: "qwepoi" })
				.then(res => {
					assert.equal(64, res.newUser.key.length);
				});
		});

		it("should Login", function() {
			return db
				.Login({ email: "test@test.com", password: "qwepoi" })
				.then(res => {
					assert.equal(64, res.key.length);
				});
		});

		it("should empty DB", function() {
			return db.Empty();
		});
	});
});
