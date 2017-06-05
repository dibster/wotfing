"use strict";

//todo look at using the javascript object name for deletes / reads
const utils = require("/users/dave/github/wotfing/api/modules/utils.js");
const db = require("/users/dave/github/wotfing/api/dbutils/db.js");

db.Empty();

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

db.Insert(user);

//db.List();

db.Count();

let userName = "dave@evrythng.com";
let pwd = "asd";

db.userKey({ email: userName, password: pwd });
