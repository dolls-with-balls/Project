const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

connect();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello mfs");
});

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
