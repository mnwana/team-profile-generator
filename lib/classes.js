class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.getName = (this) =>  this.name;
      this.getEmail = (this) =>  this.email;
      this.getId = (this) =>  this.id;
      this.getRole = (this) => 'Employee';
    }
  }

class Manager extends Employee {
    constructor(name,id,email, officeNumber) {
        super(name,id,email);
        this.officeNumber = officeNumber;
        this.getRole = (this) => 'Manager';
    }
}

class Engineer extends Employee {
    constructor(name,id,email,github){
        super(name,id,email);
        this.github = github;
        this.getGithub = (this) => this.github;
        this.getRole = 'Engineer';
    }
}
