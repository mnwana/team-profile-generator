const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHtml = require("./lib/generateHTML");

const employees = {
  managers: [],
  engineers: [],
  interns: [],
};

const promptManager = function () {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is this Managers's name?",
        type: "input",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "What is this manager's ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an ID.");
            return false;
          }
        },
      },
      {
        name: "email",
        type: "input",
        message: "What is this manager's email address?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an email.");
            return false;
          }
        },
      },
      {
        name: "office",
        type: "input",
        message: "What is this Manager's office number?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an office number.");
            return false;
          }
        },
      },
      {
        name: "addEmployee",
        message: "What would you like to do next?",
        type: "list",
        choices: ["Add Engineer", "Add Intern", "Complete Team"],
      },
    ])
    .then((employeeData) => {
      employees.managers.push(constructEmployee(employeeData, "Manager"));
      if (employeeData.addEmployee == "Add Engineer") {
        return promptEngineer();
      } else if (employeeData.addEmployee == "Add Intern") {
        return promptIntern();
      } else {
        return;
      }
    });
};

const promptEngineer = function () {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is the engineers's name?",
        type: "input",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "What is this engineer's ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an id.");
            return false;
          }
        },
      },
      {
        name: "email",
        type: "input",
        message: "What is this engineer's email address?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an email address.");
            return false;
          }
        },
      },

      {
        name: "github",
        type: "input",
        message: "What is this Engineer's GitHub username?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a username.");
            return false;
          }
        },
      },
      {
        name: "addEmployee",
        message: "What would you like to do next?",
        type: "list",
        choices: ["Add Engineer", "Add Intern", "Complete Team"],
      },
    ])
    .then((employeeData) => {
      employees.engineers.push(constructEmployee(employeeData, "Engineer"));
      if (employeeData.addEmployee == "Add Engineer") {
        return promptEngineer();
      } else if (employeeData.addEmployee == "Add Intern") {
        return promptIntern();
      } else {
        return;
      }
    });
};

const promptIntern = function () {
  console.log("Add Interns");
  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is this intern's name?",
        type: "input",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a name.");
            return false;
          }
        },
      },
      {
        name: "id",
        type: "input",
        message: "What is this intern's ID?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an id.");
            return false;
          }
        },
      },
      {
        name: "email",
        type: "input",
        message: "What is this intern's email address?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter an email address.");
            return false;
          }
        },
      },

      {
        name: "school",
        type: "input",
        message: "What is this intern's school name?",
        validate: (input) => {
          if (input) {
            return true;
          } else {
            console.log("Please enter a school name.");
            return false;
          }
        },
      },

      {
        name: "addEmployee",
        message: "What would you like to do next?",
        type: "list",
        choices: ["Add Engineer", "Add Intern", "Complete Team"],
      },
    ])
    .then((employeeData) => {
      employees.interns.push(constructEmployee(employeeData, "Intern"));
      if (employeeData.addEmployee == "Add Engineer") {
        return promptEngineer();
      } else if (employeeData.addEmployee == "Add Intern") {
        return promptIntern();
      } else {
        return;
      }
    });
};

const constructEmployee = function (empObj, role) {
  if (role == "Manager") {
    return new Manager(empObj.name, empObj.id, empObj.email, empObj.office);
  } else if (role == "Engineer") {
    return new Engineer(empObj.name, empObj.id, empObj.email, empObj.github);
  } else if (role == "Intern") {
    return new Intern(empObj.name, empObj.id, empObj.email, empObj.school);
  } else {
    return new Employee(empObj.name, empObj.id, empObj.email);
  }
};

//function to file destination with file content as pameters
function writeFile(destination, fileData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(destination, fileData, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File saved!",
      });
    });
  });
}

const init = function () {
  if (process.argv[2] == "mock") {
    employees.managers = [
      new Manager("Marielle", "1", "mnwana@gmail.com", "1"),
    ];
    employees.interns = [
      new Intern("Molly", "2", "molly@cat.com", "Meowniversity of Catty"),
    ];
    employees.engineers = [
      new Engineer("Will", "3", "willy@gmail.com", "willy123"),
    ];
    return writeFile("./dist/index.html", generateHtml(employees));
  } else {
    promptManager()
      .then(() => {
        return generateHtml(employees);
      })
      .then((htmlData) => {
        return writeFile("./dist/index.html", htmlData);
      });
  }
};

init();
