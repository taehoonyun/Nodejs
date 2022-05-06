"use strict";
//module
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//router
const home = require("./src/routes/home");

//App Setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home); // use -> register middleware.
app.use(express.static(`${__dirname}/src/public`));
module.exports = app;
