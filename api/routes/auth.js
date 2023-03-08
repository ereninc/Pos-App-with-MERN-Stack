const User = require("../models/User.js");
const express = require("express");
const router = express.Router(); //we can use HTTP methods like get, post, put, delete
const bcrypt = require("bcryptjs");

//register
router.post("/register", async (req, res) => {
  try {
    // const newUser = new User(req.body);
    // await newUser.save();
    const { username, password, email } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, password: hashedPassword, email });
    await newUser.save();
    res.status(200).json("Regstered");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
