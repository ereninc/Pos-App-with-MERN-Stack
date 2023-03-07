const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const categoryRoute = require("./routes/categories.js");
const productRoute = require("./routes/products.js");

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

//middlewares
app.use(express.json());
app.use(cors());

app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);

// app.get("/", (req, res) => {
//   res.send("TEST");
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
  connect();
});
