var express = require("express");
var path = require("path");
// var bodyParser = require("body-parser");

// initialize express
var app = express();
var PORT = process.env.PORT || 3000;

// middleware & express setup
app.use(express.static("public"));

// start server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

// routes
app.get("/", function(req, res) {
  res.json(":)");
})
app.get("/about", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})
app.get("/projects", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})
app.get("/contact", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("*", function(req, res) {
  res.send(":(");
})