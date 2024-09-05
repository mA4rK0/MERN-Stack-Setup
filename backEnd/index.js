const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, console.log(`Server is running on http://localhost:${port}`));
