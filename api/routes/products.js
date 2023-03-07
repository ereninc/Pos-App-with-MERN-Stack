const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router(); //we can use HTTP methods like get, post, put, delete

//create product name
router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("Added");
  } catch (error) {
    res.status(400).json(error);
  }
});

//get all products
router.get("/get-all-products", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).send(error);
  }
});

//update product
router.put("/update-product", async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body);
    res.status(200).json("Updated");
  } catch (error) {
    res.status(400).send(error);
  }
});

//delete product
router.delete("/delete-product", async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.status(200).json("Deleted");
  } catch (error) {
    res.status(400).send(error);
  }
});
module.exports = router;
