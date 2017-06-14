var assert = require("assert");
require("app-module-path").addPath("/users/dave/github/wotfing/api/modules");
const validate = require("validate");

describe("Schema Tests", function() {
	describe("Account", function() {
		it("should fail, no data supplied", function() {
			return validate
				.account({})
				.then(res => {
					assert(1, 2);
				})
				.catch(rej => {
					assert.equal(
						"data should have required property 'email', data should have required property 'password'",
						rej
					);
				});
		});

		it("should fail, no password", function() {
			return validate
				.account({ email: "dave@dave.com" })
				.then(res => {
					assert(1, 2);
				})
				.catch(rej => {
					assert.equal("data should have required property 'password'", rej);
				});
		});
	});

	it("should fail, invalid email", function() {
		return validate
			.account({ email: "davedave.com" })
			.then(res => {
				assert(1, 2);
			})
			.catch(rej => {
				assert.equal(
					"data.email should match format \"email\", data should have required property 'password'",
					rej
				);
			});
	});

	describe("Fing", function() {
		it("should fail, no id field supplied", function() {
			return validate
				.fing({})
				.then(res => {
					assert(1, 2);
				})
				.catch(rej => {
					assert.equal("data should have required property 'id'", rej);
				});
		});
	});
});
