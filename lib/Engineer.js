const Employee = require("./Employee");

class Engineer extends Employee {
  // construct using inputs
  constructor(name, id, email, github) {
    // inherit Employee methods and attributes
    super(name, id, email);

    this.github = github;
  }

  // return role = Engineer
  getRole() {
    return "Engineer";
  }

  // return github name
  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;
