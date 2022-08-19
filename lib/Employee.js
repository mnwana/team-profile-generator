class Employee {
  // construct using inputs
  constructor(name, id, email) {
    this.name = name;
    this.id = String(id);
    this.email = email;
  }

  // return Employee name
  getName() {
    return this.name;
  }

  // retun employee email
  getEmail() {
    return this.email;
  }

  // return employee id
  getId() {
    return this.id;
  }

  // return employee role = Employee
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
