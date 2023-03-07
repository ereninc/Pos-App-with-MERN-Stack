const User = require("../models/User.js");
const express = require("express");
const router = express.Router(); //we can use HTTP methods like get, post, put, delete

//register
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json("Regstered");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
