const router = require("express").Router();
const pool = require("../../db");
const authorization = require("../middleware/authorization");

router.post("/", authorization, async (req, res) => {
  try {

    // res.json(req.user)
    const user = await pool.query(
      "SELECT name FROM users WHERE id = $1",
      [req.user]
    );

    // if would be req.user if you change your payload to this:

    //   function jwtGenerator(id) {
    //   const payload = {
    //     user: id
    //   };

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
