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