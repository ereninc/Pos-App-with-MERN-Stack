const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router(); //we can use HTTP methods like get, post, put, delete

//create category name
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Added");
  } catch (error) {
    res.status(400).json(error);
  }
});

//get all categories
router.get("/get-all-categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).send(error);
  }
});

//update category
router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id: req.body.categoryId }, req.body);
    res.status(200).json("Updated");
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete category
router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id: req.body.categoryId });
    res.status(200).json("Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
