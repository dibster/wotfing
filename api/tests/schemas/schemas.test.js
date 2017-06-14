"use strict";
const validate = require("../../modules/validate.js");

// check random id
validate
	.register({})
	.then(res => {
		console.log("res : " + JSON.stringify(res));
	})
	.catch(rej => {
		console.log("rej : " + JSON.stringify(rej));
	});
