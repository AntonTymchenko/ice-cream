const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const { DB_HOST } = process.env;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h2>Homepage</h2>");
});

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connect success");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
