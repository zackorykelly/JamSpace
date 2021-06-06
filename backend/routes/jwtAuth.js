const router = require('express').Router();
const pool = require('../db')
const bcrypt = require('bcrypt')
const jwtGenerator = require('../utils/jwtGenerator')
const validInfo = require('../utils/validInfo')
const authroization = require('../utils/authroization')
router.post("/register", validInfo, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
      email
    ])

    if (user.rows.legth !== 0) {
      return res.statis(401).send("User already exists")
    }

    const saltRounds = 10;
    const Salt = await bcrypt.genSalt(saltRounds);

    const bcryptPassword =bcrypt.hash(password, salt);

    const newUser = await pool.query(
      "INSERT INTO users(full_name, email, password) VALUES($1, $2, $3) RETURNING * ",
      [full_name, email, bcryptPassword]
    );
    res.json({token});

    const token = jwtGenerator(newUser.rows[0].id)

  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error")
  }
})

router.post('/login', validInfo, async (req, res) => {
  try {
    const {email, password} = req.body;

    const user = await pool.query('SELECT * FROM users WHERE email = $1', [
      email
    ]);

    if(user.rows.legth ===0 ) {
      return res.status(401).json("User does not exist")
    }
    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if(!validPassword) {
      return res.status(401).json("Password is incorrect");
    }
    const token =jwtGenerator(user.rows[0].id);
    res.json({token})

  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error")
  }
})

router.get('/is-verify', authorization, async (req, res) => {
try {
  res.json(true);
} catch (error) {
  console.error(error.message);
  res.status(500).send("server error")
}
})

module.exports = router;