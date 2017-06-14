"use strict";
var Ajv = require("ajv");

const accountSchema = require("../schemas/account.json");
const fingSchema = require("../schemas/fing.json");

var ajv = new Ajv({ allErrors: true });
var validateAccount = ajv.compile(accountSchema);
var validateFing = ajv.compile(fingSchema);

function account(data) {
	return new Promise((res, rej) => {
		const valid = validateAccount(data);
		console.log("in validate");
		if (valid) {
			res();
		} else {
			console.log("invalid", ajv.errorsText(validateAccount.errors));
			rej(ajv.errorsText(validateAccount.errors));
		}
	});
}

function fing(data) {
	return new Promise((res, rej) => {
		const valid = validateFing(data);
		console.log("in validate");
		if (valid) {
			res();
		} else {
			console.log("invalid", ajv.errorsText(validateFing.errors));
			rej(ajv.errorsText(validateFing.errors));
		}
	});
}

module.exports = {
	account,
	fing
};
