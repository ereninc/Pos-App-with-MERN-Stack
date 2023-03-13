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

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json("user not found!");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!validPassword) res.status(403).json("Wrong password, try again.");
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
