//in ejs express already require internally ejs
//ejs is not use res.send it is use res.render

const express = require("express");
const app = express();
const path = require("path");
const port = 4000;

//it is target views folder for ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

//it is use for static files like css js and images
// app.use(express.static(path.join(__dirname, "/public"))); //for full folder when everything in public folder
app.use(express.static(path.join(__dirname, "/public/css"))); //for only css folder
app.use(express.static(path.join(__dirname, "/public/js"))); //for only js folder

app.listen(port, (req, res) => {
  console.log("the server is listining");
});

//it is for the ejs
app.get("/", (req, res) => {
  //he send files
  res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
  //   res.render("rolldice.ejs");
  let number = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", { number });
});

// using params
// app.get("/instagram/:username/:id", (req, res) => {
//   let { username, id } = req.params;
//   let followers = ["vishnu", "sai", "ram", "krishna"];
//   res.render("instagram.ejs", { username, id, followers });
// });

// using Data.json
app.get("/instagramdata/:username", (req, res) => {
  let { username } = req.params;
  let data = require("./data.json");
  let finaldata = data[username];
  console.log(finaldata);
  if (finaldata) {
    res.render("instagramdata.ejs", { finaldata });
  } else {
    res.render("error.ejs", { username });
  }
});
