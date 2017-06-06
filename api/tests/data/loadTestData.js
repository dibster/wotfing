"use strict";

//todo look at using the javascript object name for deletes / reads
require("app-module-path").addPath("/users/dave/github/wotfing/api/modules");

const utils = require("utils.js");
const db = require("db.js");

let user = {};

user.email = "dave@evrythng.com";
user.pwd = "asd";
user.key = utils.uniqueKey();
let pwdSalt = utils.saltHashPassword(user.pwd);
user.hashpwd = pwdSalt.passwordHash;
user.salt = pwdSalt.salt;
user.fings = [];

let fing = {
	code: "qiwuey",
	timestamp: utils.epochNow(),
	thumb: "location",
	pic: "location",
	categories: [],
	places: [],
	notify: 123
};

user.fings.push(fing);
user.fings.push(fing);
user.fings.push(fing);
user.fings.push(fing);

user.oldfings = [];

user.categories = ["Food"];
user.places = ["Freezer", "Fridge"];
user.memberOf = [];

db.Empty().then(r => {
	console.log("Emptied :", r);
	db
		.CreateAccount({ email: "dave@evrythng.com", pwd: "asd" })
		.then(res => {
			console.log("Insert Promise Done");
			db.Count().then(len => {
				console.log("Number of Docs : ", len);
				let userName = "dave@evrythng.com";
				let pwd = "asd";
				db
					.Login({ email: userName, password: pwd })
					.then(res => {
						console.log("res from login : " + JSON.stringify(res));
						db.List().then(res => {
							//console.log("res : " + JSON.stringify(res));
						});
					})
					.catch(err => {
						console.log("err : " + JSON.stringify(err));
					});
			});
		})
		.catch(err => {
			console.log("err on create account: " + JSON.stringify(err));
		});
});

db.CreateAccount({ email: "test@test.com", pwd: "qwepoi" }).then(res => {
	console.log("created new user : " + JSON.stringify(res));
	console.log("res.key : " + res.newUser.key);

	db.List().then(res => {
		console.log("res : " + JSON.stringify(res));
	});
});
