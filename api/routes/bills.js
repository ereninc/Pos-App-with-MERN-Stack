const Bill = require("../models/Bill.js");
const express = require("express");
const router = express.Router(); //we can use HTTP methods like get, post, put, delete

//create Bill name
router.post("/add-bill", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Added");
  } catch (error) {
    res.status(400).json(error);
  }
});

//get all Bills
router.get("/get-all-bills", async (req, res) => {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
