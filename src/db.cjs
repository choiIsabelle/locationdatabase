const Pool = require("pg").Pool;
//connects to database
const pool = new Pool({
    user: "postgres",
    host:"localhost",
    password: "2003",
    database:"perntodo",
    port: 5432
})

module.exports =pool;