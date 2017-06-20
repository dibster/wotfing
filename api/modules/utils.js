"use strict";
const ID_LEN = 16, KEY_LEN = 32;

const crypto = require("crypto");
const sharp = require("sharp");

const imageSourceDirectory = "../files/pictures/";
const thumbnailTargetDirectory = "../files/thumbnails/";

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

function phonePicture(from) {
	return new Promise((res, rej) => {
		const sourceFile = imageSourceDirectory + from;
		console.log("sourceFile : " + sourceFile);

		sharp(sourceFile)
			.resize(300, 300)
			.toFile(thumbnailTargetDirectory + "P" + from, (err, info) => {
				if (err) {
					rej(99);
				} else {
					res(0);
				}
			});
	});
}

function webPicture(from) {
	return new Promise((res, rej) => {
		const sourceFile = imageSourceDirectory + from;
		console.log("sourceFile : " + sourceFile);

		sharp(sourceFile)
			.resize(500, 500)
			.toFile(thumbnailTargetDirectory + "W" + from, (err, info) => {
				if (err) {
					rej(99);
				} else {
					res(0);
				}
			});
	});
}

function thumbnail(from) {
	return new Promise((res, rej) => {
		const sourceFile = imageSourceDirectory + from;
		console.log("sourceFile : " + sourceFile);

		sharp(sourceFile)
			.resize(150, 150)
			.toFile(thumbnailTargetDirectory + "T" + from, (err, info) => {
				if (err) {
					rej(99);
				} else {
					res(0);
				}
			});
	});
}

module.exports = {
	uniqueId,
	uniqueKey,
	saltHashPassword,
	epochNow,
	thumbnail,
	webPicture,
	phonePicture,
	sha512
};
