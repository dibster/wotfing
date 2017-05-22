const pool = require("../lib/db");

const wfTables = [
	"users",
	"groups",
	"fings",
	"categories",
	"places",
	"pictures"
];

wfTables.map(table => {
	drop(table);
});

function drop(table) {
	let statement = "DROP TABLE " + table + ";";
	pool.query(statement, function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Dropped Table : " + table);
			pool.query("COMMIT", function(err, result) {
				if (err) {
					console.log(err);
				}
			});
		}
	});
}
