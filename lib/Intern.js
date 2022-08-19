const Employee = require('./Employee');

class Intern extends Employee {
    // construct using inputs

  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
// return role = "Intern"
  getRole() {
    return "Intern";
  }
  // return school
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;