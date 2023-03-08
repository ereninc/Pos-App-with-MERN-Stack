const User = require("../models/User.js");
const express = require("express");
const router = express.Router(); //we can use HTTP methods like get, post, put, delete

//get all users
router.get("/get-all-users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get a user
router.get("/get-user", async (req, res) => {
  const userId = req.body.userId;
  try {
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (error) {
    res.status(403).json("User not found!");
  }
});

module.exports = router;
