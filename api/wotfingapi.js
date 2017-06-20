"use strict";
var status = require("statuses");
const db = require("./modules/db");
const validate = require("./modules/validate");

const bunyan = require("bunyan");
const logger = bunyan.createLogger({
	name: "wotfing-api",
	streams: [
		{
			level: "info",
			path: "./logs/wotfing-info.log"
		},
		{
			level: "error",
			path: "./logs/wotfing-error.log"
		}
	]
});

const express = require("express"); // call express
const app = express(); // define our app using express
const bodyParser = require("body-parser");
const cors = require("cors");

// file upload
const fileUpload = require("express-fileupload");

// allow CORS
app.use(cors());
app.use(fileUpload());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

//
startUp();

// account functions
app.get("/account/login", function(req, res) {
	logger.info(req.body);
	console.log("req : " + JSON.stringify(req.body));

	validate
		.register(req.body)
		.then(() => {
			db
				.Login(req.body)
				.then(resp => {
					res.status(status[200]).json(resp);
				})
				.catch(err => {
					res.status(status[400]).json(err);
				});
		})
		.catch(err => {
			res.status(status[403]).json(err);
		});
});

app.post("/account/register", function(req, res) {
	logger.info(req.body);
	console.log("req : " + JSON.stringify(req.body));

	validate
		.account(req.body)
		.then(resp => {
			console.log("Create");
			db
				.CreateAccount(req.body)
				.then(resp => {
					res.status(200).json(resp);
				})
				.catch(err => {
					res.status(400).json(err);
				});
		})
		.catch(err => {
			res.status(403).json(err);
		});
});

app.post("/account/login", function(req, res) {
	logger.info(req.body);

	validate
		.account(req.body)
		.then(resp => {
			console.log("Login");
			db
				.Login(req.body)
				.then(resp => {
					res.status(200).json(resp);
				})
				.catch(err => {
					res.status(400).json(err);
				});
		})
		.catch(err => {
			res.status(403).json(err);
		});
});

app.post("/fings/:id/image", function(req, res) {
	logger.info(req.body);
	console.log("req.params.id : " + JSON.stringify(req.params.id));
	if (!req.files) return res.status(400).send("No files were uploaded.");
	let sampleFile = req.files.sampleFile;
	sampleFile.mv("./files/pictures/" + req.params.id + ".jpg", function(err) {
		if (err) return res.status(500).send(err);
		res.send({ status: 0 });
	});
});

app.put("/fings", function(req, res) {
	logger.info(req.body);
	let auth = req.get("authorization");
	validate
		.fing(req.body)
		.then(resp => {
			console.log("New Fing");
			db
				.AddFing(auth, req.body)
				.then(resp => {
					res.status(200).json(resp);
				})
				.catch(err => {
					res.status(400).json(err);
				});
		})
		.catch(err => {
			res.status(403).json(err);
		});
});

app.get("/fings/:id", function(req, res) {
	logger.info(req.body);
	let auth = req.get("authorization");
	console.log("GetFing : ", req.params.id);
	db
		.GetFing(auth, req.params.id)
		.then(resp => {
			console.log("resp : " + JSON.stringify(resp));
			res.status(200).json(resp);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

app.get("/fings", function(req, res) {
	logger.info(req.body);
	let auth = req.get("authorization");
	console.log("req : " + auth);
	console.log("List Fings");
	db
		.GetAllFings(auth)
		.then(resp => {
			console.log("resp : " + JSON.stringify(resp));
			res.status(200).json(resp);
		})
		.catch(err => {
			res.status(400).json(err);
		});
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("wotfing api listening ... " + port);

// PASS READS / AND DELETES THROUGH
// =============================================================================

function startUp() {
	console.log("Started API");
}
