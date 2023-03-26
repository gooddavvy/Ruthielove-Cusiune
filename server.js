var express = require("express");
var path = require("path");

// set a port and an app instance
var app = express();
var port = process.env.PORT || 3000;
var user;

// Render all files
app.get("/", function(req, res) {
  if (typeof user === "object") res.sendFile(path.join(__dirname, 'templates/index.html'));
  else res.redirect("/site");
});
app.get("/princess.css", function(req, res) {
  res.sendFile(path.join(__dirname, 'templates/princess.css'));
});

// extra routes
app.get("/site", function (req, res) {
  res.sendFile(path.join(__dirname, 'templates/site.html'));
});
app.get("/add-user", function (req, res) {
  var { username } = req.query;

  res.redirect("/");
});

// listen
app.listen(port, () => {
  console.log("server started");
})