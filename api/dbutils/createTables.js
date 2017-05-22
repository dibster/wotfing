const pool = require("../lib/db");
const fs = require("fs");

const wfTables = [
	"users",
	"groups",
	"fings",
	"categories",
	"places",
	"pictures"
];

wfTables.map(table => {
	create(table);
});

function create(table) {
	let createTabSql = fs.readFileSync("./ddl/" + table + ".sql", "utf-8");
	pool.query(createTabSql, function(err, result) {
		if (err) {
			console.log(err);
		} else {
			console.log("Created Table : " + table);
			pool.query("COMMIT", function(err, result) {
				if (err) {
					console.log(err);
				}
			});
		}
	});
}
