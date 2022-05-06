"use strict";

class UserStorage {
  static #users = {
    id: ["taehoon", "Elle", "Taell"],
    psword: ["1234", "1234", "123456"],
    names: ["Taehoon", "Elle", "Love"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    // console.log(fields);
    const newUsers = fields.reduce((newUsers, fields) => {
      if (users.hasOwnProperty(fields)) {
        newUsers[fields] = users[fields];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  static getUsersInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userkey = Object.keys(users);
    const userInfo = userkey.reduce((newUsers, info) => {
      newUsers[info] = users[info][idx];
      return newUsers;
    }, {});
    return userInfo;
  }
}
module.exports = UserStorage;
