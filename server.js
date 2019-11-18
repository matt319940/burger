var express = require("express");
var exphbs = require("express-handlebars");

var app = express();

app.use(express.static(__dirname + '/public'));

var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");


var rout = require("./controllers/burgers_controllers.js");
app.use("/", rout);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});