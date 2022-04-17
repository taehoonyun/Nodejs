"use strict";
//module
const express = require("express");
const app = express();

//router
const home = require("./src/routes/home");

//set App
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // use -> register middleware.
app.use(express.static(`${__dirname}/src/public`));
module.exports = app;
