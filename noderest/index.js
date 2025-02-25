const express = require("express");
const app = express();
const port = 3000;
const { v4: uuid } = require("uuid"); //for unique id
const methodOverride = require("method-override"); //for update the post

app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: true }));
const path = require("path");

let post = [
  {
    // id: "1a",
    id: uuid(),
    name: "vishnu",
    roll: 146,
    content: "hello i am vishnu",
  },
  {
    // id: "2b",
    id: uuid(),
    name: "vikash",
    roll: 147,
    content: "hello i am vikash",
  },
  {
    // id: "3c",
    id: uuid(),
    name: "krishan",
    roll: 148,
    content: "hello i am krishan",
  },
];
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, (req, res) => {
  console.log("the app is listining");
});
app.get("/post", (req, res) => {
  res.render("index.ejs", { post });
});

//for create the post
app.get("/post/new", (req, res) => {
  res.render("new.ejs");
});

//for add the post in the post
app.post("/post", (req, res) => {
  let { name, roll, content } = req.body;
  let id = uuid();
  post.push({ id, name, roll, content });
  res.redirect("/post");
});
//acces with the id
app.get("/post/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let posts = post.find((p) => p.id === id);
  res.render("show.ejs", { posts });
});
// for update the post we use patch method
app.patch("/post/:id", (req, res) => {
  let { id } = req.params;
  let lastcontent = req.body.content;
  let posts = post.find((p) => p.id === id);
  posts.content = lastcontent;
  res.redirect("/post");
});

//edit the post
app.get("/post/:id/edit", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let posts = post.find((p) => p.id === id);
  res.render("edit.ejs", { posts });
});

//for delete
app.delete("/post/:id", (req, res) => {
  let { id } = req.params;
  post = post.filter((p) => p.id !== id);
  res.redirect("/post");
});
