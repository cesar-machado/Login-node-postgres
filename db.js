const Pool = require("pg").Pool;

const pool = new Pool({
    user: "cesar",
    password: "password",
    host: "localhost",
    port: 5432,
    database: "nodelogin"
})

module.exports = pool;