const express = require("express");
const router = require("express").Router();
const pool = require('../../db')
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo");
const authorization = require("../middleware/authorization");

router.post("/register", validInfo, async (req, res) => {
  try {
    //req.body(name, email, password)

    const { name, email, password } = req.body;

    //check user exist.
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        email
    ]);

    if (user.rows.length > 0) {
        return res.status(401).json("User already exist!");
      }

    const salt = await bcrypt.genSalt(10);
    const bcryptPassword = await bcrypt.hash(password, salt);

    // inserindo usuário no banco de dados

    let newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *",
      [name, email, bcryptPassword]
    );

    // res.json(newUser.rows[0])

    const jwtToken = jwtGenerator(newUser.rows[0].id);

    return res.json({ jwtToken });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login",validInfo, async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await pool.query("SELECT * FROM users WHERE email = $1", [
        email
      ]);
  
      if (user.rows.length === 0) {
        return res.status(401).json("Invalid Credential");
      }
  
      const validPassword = await bcrypt.compare(
        password,
        user.rows[0].password
      );
  
      if (!validPassword) {
        return res.status(401).json("Invalid Credential");
      }
      const jwtToken = jwtGenerator(user.rows[0].id);
      return res.json({ jwtToken });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  });

  router.get("/is-verify", authorization, async (req, res) => {
    try {
      res.json(true)
    } catch (err) {
      console.log(err);
        console.error(err.message);
        res.status(500).send("Server error");
    }
  })

module.exports = router;
