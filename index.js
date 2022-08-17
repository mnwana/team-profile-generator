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

const promptUser = function (employeeArr) {
  if (!employeeArr) {
    employeeArr = [];
  }
  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is the employee's name?",
        type: "input",
        validate: (nameInput) => {
          if (nameInput) {
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
        message: "What is this employee's ID?",
      },
      {
        name: "email",
        type: "input",
        message: "What is this employee's email address?",
      },
      {
        name: "role",
        type: "list",
        message: "What is this employee's role?",
        choices: ["Manager", "Engineer", "Intern", "Other"],
      },
      {
        name: "office",
        type: "input",
        message: "What is this Manager's office number?",
        when: ({ role }) => {
          return role == "Manager";
        },
      },

      {
        name: "github",
        type: "input",
        message: "What is this Engineer's GitHub username?",
        when: ({ role }) => {
          return role == "Engineer";
        },
      },

      {
        name: "school",
        type: "input",
        message: "What is this Intern's school name?",
        when: ({ role }) => {
          return role == "Intern";
        },
      },

      {
        name: "confirmAdd",
        message: "Would you like to add another employee?",
        type: "confirm",
      },
    ])
    .then((employeeData) => {
      employeeArr.push(constructEmployee(employeeData, employeeData.role));
      if (employeeData.confirmAdd) {
        return promptUser(employeeArr);
      } else {
        return employeeArr;
      }
    });
};

const promptManager = function () {
  return inquirer
    .prompt([
      {
        name: "name",
        message: "What is this Managers's name?",
        type: "input",
        validate: (nameInput) => {
          if (nameInput) {
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
      },
      {
        name: "email",
        type: "input",
        message: "What is this manager's email address?",
      },
      {
        name: "office",
        type: "input",
        message: "What is this Manager's office number?",
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
        validate: (nameInput) => {
          if (nameInput) {
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
      },
      {
        name: "email",
        type: "input",
        message: "What is this engineer's email address?",
      },

      {
        name: "github",
        type: "input",
        message: "What is this Engineer's GitHub username?",
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
        validate: (nameInput) => {
          if (nameInput) {
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
      },
      {
        name: "email",
        type: "input",
        message: "What is this intern's email address?",
      },

      {
        name: "school",
        type: "input",
        message: "What is this intern's school name?",
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
