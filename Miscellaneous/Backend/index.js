const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); //it encode the data for post request
app.use(express.json()); //it is use for json data for post request
app.post("/register", (req, res) => {
  let { name, password } = req.body;

  res.send(`hyy ${name} your password is ${password}`);
});
app.get("/register", (req, res) => {
  let { name, password } = req.query;
  res.send(`hyy ${name} your password is ${password}`);
});

app.listen(port, (req, res) => {
  console.log("the app is listening");
});
