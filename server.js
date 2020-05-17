var express = require("express");
var body_parser = require("body-parser");

var PORT = process.env.PORT || 3000;
var db = require("./models");

var app = express();


app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);
db.sequelize.sync().then(function(){
  app.listen(PORT, function() {

    console.log("Server listening on: http://localhost:" + PORT);
  });
})
