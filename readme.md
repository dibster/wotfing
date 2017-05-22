POSTGRES

initdb
/usr/local/Cellar/postgresql/9.6.3/bin/initdb ~/github/wotfing/db

start postgres
/usr/local/Cellar/postgresql/9.6.3/bin/pg_ctl -D /Users/dave/github/wotfing/db -l logfile start

Database

wotfingdb

Creating the DB (may be in different Order)

/usr/local/var/postgres : /usr/local/Cellar/postgresql/9.6.3/bin/pg_ctl -D /Users/dave/github/wotfing/db -l logfile start
/usr/local/var/postgres : /usr/local/Cellar/postgresql/9.6.3/bin/initdb ~/github/wotfing/db
