"use strict";

const hello = (req, res) => {
  res.render("home/login");
};

const login = (req, res) => {
  res.send("it is in login");
};

module.exports = {
  hello,
  login,
};
