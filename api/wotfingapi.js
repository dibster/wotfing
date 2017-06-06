"use strict";
const restResponse = require("./modules/restReponse.js");
const account = require("./modules/account.js");

const bunyan = require("bunyan");
const logger = bunyan.createLogger({
	name: "evrythng-seeder-api",
	streams: [
		{
			level: "info",
			path: "./logs/proxy-info.log"
		},
		{
			level: "error",
			path: "./logs/proxy-error.log" // log ERROR and above to a file.
		}
	]
});

const express = require("express"); // call express
const app = express(); // define our app using express
const bodyParser = require("body-parser");
const cors = require("cors");

// allow CORS
app.use(cors());

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

//
startUp();

// posts validate against a schema if it exists for the endpoint and type
app.get("/account/login", function(req, res) {
	logger.info(req.body);
});
// posts validate against a schema if it exists for the endpoint and type

// START THE SERVER
// =============================================================================
app.listen(port);
console.log("schema api listening ... " + port);

// PASS READS / AND DELETES THROUGH
// =============================================================================

function startUp() {
	console.log("Started API");
}
