"use strict";

const UserStorage = require("../../modules/UserStorage");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },

  login: (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;
    const UserStor = new UserStorage();
    console.log(UserStor.users);
    // const response = {};
    // if (users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if (users.psword[idx] === psword) {
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }
    // response.success = false;
    // response.msg = "failed to login";
    // return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
