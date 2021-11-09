const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("<h2>Homepage</h2>");
});

const DB_HOST =
  "mongodb+srv://Anton:DqOiewhmKmDkdOSe@cluster0.8wa4r.mongodb.net/online_shop?retryWrites=true&w=majority";

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
