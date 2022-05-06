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
}
module.exports = UserStorage;
