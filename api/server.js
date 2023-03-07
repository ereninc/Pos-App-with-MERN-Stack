const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Express server
const app = express();
const port = 5000;

//Env file and this file connection
dotenv.config();

//DB connect
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MongoDB");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => {
  res.send("TEST");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  connect();
});
