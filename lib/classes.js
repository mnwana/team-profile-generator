class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.getName = this.name;
    this.getEmail = this.email;
    this.getId = this.id;
    this.getRole = "Employee";
  }
}

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.getRole = "Manager";
  }
}

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.getGithub = this.github;
    this.getRole = "Engineer";
  }
}

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.getSchool = this.school;
    this.getRole = "Intern";
  }
}

module.export = { Employee, Manager, Intern, Engineer };
