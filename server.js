var express = require("express");
var path = require("path");

// initialize express
var app = express();
var PORT = process.env.PORT || 3000;

// express middleware setup
app.use(express.static("public"));

// start server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});

// routes
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./public/index.html"))
});