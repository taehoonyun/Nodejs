"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const body = this.body;
    const { id, psword } = await UserStorage.getUsersInfo(body.id);
    if (id) {
      if (id === body.id && psword === body.psword) {
        return { success: true };
      }
      return { success: false, msg: "this is wrong password" };
    }
    return { success: false, msg: "Id is wrong" };
  }
}

module.exports = User;
