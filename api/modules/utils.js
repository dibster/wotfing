"use strict";
const ID_LEN = 16, KEY_LEN = 32;

const crypto = require("crypto");

function uniqueId() {
	return crypto.randomBytes(ID_LEN).toString("hex");
}

function uniqueKey() {
	return crypto.randomBytes(KEY_LEN).toString("hex");
}

/**
 * hash password with sha512.
 * @function
 * @param {string} password - List of required fields.
 * @param {string} salt - Data to be validated.
 */
function sha512(password, salt) {
	let hash = crypto.createHmac("sha512", salt); /** Hashing algorithm sha512 */
	hash.update(password);
	let value = hash.digest("hex");
	return {
		salt: salt,
		passwordHash: value
	};
}

function saltHashPassword(userpassword) {
	let salt = uniqueId(); /** Gives us salt of length 16 */
	let passwordData = sha512(userpassword, salt);
	return passwordData;
}

function epochNow() {
	return new Date().getTime();
}

module.exports = {
	uniqueId,
	uniqueKey,
	saltHashPassword,
	epochNow,
	sha512
};
