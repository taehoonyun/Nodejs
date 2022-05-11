"use strict";

const fs = require("fs").promises;
class UserStorage {
  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  static getUsersInfo(id) {
    return fs
      .readFile("./src/database/Users/Users.json")
      .then((data) => {
        return this.#getUsersInfo(data, id);
      })
      .catch(console.error);
  }

  static #getUsersInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userkey = Object.keys(users);
    const userInfo = userkey.reduce((newUsers, info) => {
      newUsers[info] = users[info][idx];
      return newUsers;
    }, {});
    return userInfo;
  }
  static save(userInfo) {
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    return { success: true };
  }
}
module.exports = UserStorage;
