const express = require("express");
const app = express();
let port = 3000;

app.listen(port, () => {
  console.log("server is listning");
});

//it is listen all the requests
// app.use((req, res) => {
//   console.log("Hello World");
//   res.send("<h1> this is a  first response</h1>");
// });

//this is get request
app.get("/", (req, res) => {
  res.send("<h1>this is home route</h1>");
});
// app.get("/orange", (req, res) => {
//   res.send("<h1>this is orange route</h1>");
// });
// app.get("/apple", (req, res) => {
//   res.send("<h1>this is apple route</h1>");
// });
// app.get("/banana", (req, res) => {
//   res.send("<h1>this is banana route</h1>");
// });
// app.get("*", (req, res) => {
//   res.send("<h1>page not found</h1>");
// });

//this is post message
// app.post("/", (req, res) => {
//   res.send("this is post request");
// });

//params
// app.get("/:username/:id", (req, res) => {
//   //   console.log(req.params);
//   let { username, id } = req.params;
//   res.send(`<h1>welcome ${username} it is your id number : ${id}</h1>`);
// });

app.get("/about", (req, res) => {
  let { q } = req.query;
  res.send(`this is your query ${q}`);
});
