"use strict";
const ID_LEN = 16, KEY_LEN = 32;

const crypto = require("crypto");

function uniqueId() {
	return crypto.randomBytes(ID_LEN).toString("hex");
}

function uniqueKey() {
	return crypto.randomBytes(KEY_LEN).toString("hex");
}

module.exports = {
	uniqueId,
	uniqueKey
};
