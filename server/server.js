var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var ejs = require("ejs");
var mongoose = require("mongoose");
var port = process.env.Port || 8080;

//setup app
var app = express();

//connect to mongodb server
mongoose.connect("mongodb://localhost/portfolio");

//setup server to handle json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//setup server to handle html
app.use(express.static(path.join(__dirname + "\\..\\public\\")));
app.set("views", __dirname + "\\..\\public\\view");
app.engine("html", ejs.renderFile);
app.set("view engine", "ejs");

//import routes
var fileRouter = require("./routes/files");
var apiRouter = require("./routes/api");

//use routers
app.use(fileRouter);
app.use("/cv",apiRouter);

app.listen(port, function() {
    console.log("Listening at port 8080")
})