"use strict";
require("app-module-path").addPath("/users/dave/github/wotfing/api/modules");
const utils = require("utils.js");

const Datastore = require("nedb"),
	users = new Datastore({ filename: "../database/users.db", autoload: true });

function Insert(doc) {
	return new Promise((res, rej) => {
		users.insert(doc, function(err, newDoc) {
			res(true);
		});
	});
}

function Update(token, doc) {
	return new Promise((res, rej) => {
		users.update({ key: token }, doc, function(err, newDoc) {
			if (err) {
				rej(err);
			}
			res(newDoc);
		});
	});
}

function List() {
	return new Promise((res, rej) => {
		users.find({}).exec(function(err, docs) {
			res(docs);
		});
	});
}

function Find(parms) {
	return new Promise((res, rej) => {
		users.find(parms).exec(function(err, docs) {
			res(docs);
		});
	});
}

function Count(parms) {
	return new Promise((res, rej) => {
		users.find({}).exec(function(err, docs) {
			res(docs.length);
		});
	});
}

function Empty() {
	return new Promise((res, rej) => {
		users.remove({}, { multi: true }, function(err, numRemoved) {
			res(true);
		});
	});
}

function Login(credentials) {
	return new Promise((res, rej) => {
		let resp = {};
		users.find({ email: credentials.email }).exec(function(err, docs) {
			if (docs.length === 0) {
				resp.validUser = false;
				resp.message = "User not Found";
				res(resp);
			}

			if (docs.length > 1) {
				resp.validUser = false;
				resp.message = "Too Many Users";
				res(resp);
			}

			let hashs = utils.sha512(credentials.password, docs[0].salt);
			if (hashs.passwordHash === docs[0].hashpwd) {
				resp.validUser = true;
				resp.message = "User Validated";
				resp.apiKey = docs[0].key;
				res(resp);
			} else {
				resp.validUser = false;
				resp.message = "Invalid User Name or Password";
				rej(resp);
			}
		});
	});
}

function CreateAccount(credentials) {
	return new Promise((res, rej) => {
		// check if email exists
		users.find({ email: credentials.email }).exec(function(err, docs) {
			if (docs.length > 0) {
				resp.message = "User already Exists";
				resp.created = false;
				rej(resp);
			}
			let user = getUserTemplate(credentials.email, credentials.pwd);
			users.insert(user, function(err, newDoc) {
				let resp = {};
				if (err) {
					resp.message = err;
					resp.created = false;
					rej(resp);
				}
				resp.message = "User Created";
				resp.created = true;
				resp.newUser = newDoc;
				res(resp);
			});
		});
	});
}

function getUserTemplate(email, pwd) {
	let user = {};
	user.email = email;
	user.pwd = pwd;
	user.key = utils.uniqueKey();
	let pwdSalt = utils.saltHashPassword(pwd);
	user.hashpwd = pwdSalt.passwordHash;
	user.salt = pwdSalt.salt;
	user.fings = [];
	user.oldfings = [];
	user.categories = ["Food"];
	user.places = ["Freezer", "Fridge"];
	user.memberOf = [];
	return user;
}

module.exports = {
	Insert,
	Find,
	List,
	Empty,
	Count,
	Login,
	CreateAccount
};
