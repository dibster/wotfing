const pool = require("../lib/db");

//to run a query we just pass it to the pool
//after we're done nothing has to be taken care of
//we don't have to return any client to the pool or close a connection
pool.query("SELECT * FROM films", function(err, result) {
	console.log(
		"name: %s and age: %s",
		result.rows[0].code,
		result.rows[0].title
	);
	// since the row object is just a hash, it can be accessed also as follows
	console.log(
		"name: %s and age: %s",
		result.rows[0]["code"],
		result.rows[0]["title"]
	);
});
