const pool = require("../lib/db");

//to run a query we just pass it to the pool
//after we're done nothing has to be taken care of
//we don't have to return any client to the pool or close a connection
pool.query("SELECT * FROM users", function(err, result) {
	console.log("number of rows : ", result.rows.length);
});
