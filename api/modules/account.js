"use strict";
const utils = require("/users/dave/github/wotfing/api/modules/utils.js");

function create(user) {
	const newUser = {};
	newUser.email = user.email;
	let pwdhash = utils.saltHashPassword(user.password);
	newUser.salt = pwdhash.salt;
	newUser.password = pwdhash.passwordHash;
	newUser.id = utils.uniqueId();
	newUser.accessKey = utils.uniqueKey();
	save(newUser);
}

function remove(user) {
	return password;
}

function login(user) {}

function save(user) {
	console.log("user : " + JSON.stringify(user));
}

module.exports = {
	create,
	remove,
	login
};
