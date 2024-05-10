const express = require("express");

require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("harsh");
});

app.get("/login", (req, res) => {
  res.send("<h1>login to the harsh website</h1>");
});
app.get("/youtube", (req, res) => {
  res.send("<h2> hello users welcome to the youtube.com</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
