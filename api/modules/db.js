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

function AddFing(userKey, fing) {
	return new Promise((res, rej) => {
		users.find({ key: userKey }).exec(function(err, docs) {
			if (err) {
				rej(err);
			}
			let doc = docs[0];
			fing.timestamp = utils.epochNow();
			doc.fings.push(fing);
			users.update({ key: userKey }, doc, function(err, numUpdated) {
				res(fing);
			});
		});
	});
}

function RemoveFing(userKey, fing) {
	return new Promise((res, rej) => {
		users.find({ key: userKey }).exec(function(err, docs) {
			if (err) {
				rej(err);
			}
			let doc = docs[0];
			let archiveFing = {};
			let newFings = doc.fings.filter(f => {
				if (f.id === fing.id) {
					archiveFing = f;
				}
				return fing.id !== f.id;
			});
			doc.fings = newFings;
			doc.oldfings.push(archiveFing);
			users.update({ key: userKey }, doc, function(err, numUpdated) {
				res(doc.fings.length);
			});
		});
	});
}

function GetFing(userKey, fing) {
	return new Promise((res, rej) => {
		users.find({ key: userKey }).exec(function(err, docs) {
			if (err) {
				rej(err);
			}
			let doc = docs[0];
			let searchFings = doc.fings.filter(f => {
				return fing.id === f.id;
			});
			let foundFing = searchFings[0];
			res(foundFing);
		});
	});
}

function Thumbnail(userKey, fingId) {
	return new Promise((res, rej) => {
		users.find({ key: userKey }).exec(function(err, docs) {
			if (err) {
				rej(err);
			}
			let doc = docs[0];

			let searchFings = doc.fings.filter(f => {
				return fingId === f.id;
			});

			let foundFing = searchFings[0];

			//TODO , run in parallel

			// now thumbnail the image
			utils
				.thumbnail(foundFing.picUrl)
				.then(resThumb => {
					res(0);
				})
				.catch(err => {
					res(99);
				});

			// now add web picture
			utils
				.webPicture(foundFing.picUrl)
				.then(resThumb => {
					res(0);
				})
				.catch(err => {
					res(99);
				});

			// now add phone picture the image
			utils
				.phonePicture(foundFing.picUrl)
				.then(resThumb => {
					res(0);
				})
				.catch(err => {
					res(99);
				});
		});
	});
}

function GetAllFings(userKey) {
	return new Promise((res, rej) => {
		users.find({ key: userKey }).exec(function(err, docs) {
			if (err) {
				rej(err);
			}
			let allFings = docs[0].fings;
			res(allFings);
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
				resp.key = docs[0].key;
				resp.fings = docs[0].fings;
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
			let resp = {};
			if (docs.length > 0) {
				resp.message = "User already Exists";
				resp.created = false;
				rej(resp);
			}
			let user = getUserTemplate(credentials.email, credentials.password);
			users.insert(user, function(err, newDoc) {
				if (err) {
					resp.message = err;
					resp.created = false;
					rej(resp);
				}
				resp.message = "User Created";
				resp.created = true;
				resp.key = newDoc.key;
				res(resp);
			});
		});
	});
}

function getUserTemplate(email, pwd) {
	let user = {};
	user.email = email;
	// set API key
	user.key = utils.uniqueKey();
	// set password and salt
	let pwdSalt = utils.saltHashPassword(pwd);
	user.hashpwd = pwdSalt.passwordHash;
	user.salt = pwdSalt.salt;
	// base app data
	user.fings = [];
	user.Triggers = [];
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
	AddFing,
	RemoveFing,
	GetFing,
	GetAllFings,
	Thumbnail,
	CreateAccount
};
