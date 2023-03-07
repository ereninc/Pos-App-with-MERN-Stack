const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router(); //we can use HTTP methods like get, post, put, delete

//create data
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("item added successfully");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
