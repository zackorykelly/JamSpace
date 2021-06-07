const Pool = require('pg').Pool

const pool = new Pool ({
  user:"labber",
  password: "labber",
  host: "localhost",
  port: 3002,
  database: "jamspace"
});
