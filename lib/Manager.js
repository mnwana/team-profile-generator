const Employee = require('./Employee');

class Manager extends Employee {
    // construct using inputs
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = String(officeNumber);
  }

  // return role = Manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;