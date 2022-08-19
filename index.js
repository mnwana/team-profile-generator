const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./lib/generateHTML");

// const to hold employees input by user in designated arrays
const employees = {
  managers: [],
  engineers: [],
  interns: [],
};

// prompt user for input about team manager
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
      // construct manager object then push to employees.managers array
      employees.managers.push(constructEmployee(employeeData, "Manager"));
      // if user chose to add engineer prompt engineer questions
      if (employeeData.addEmployee == "Add Engineer") {
        return promptEngineer();
      }
      // if user chose to add intern prompt intern questions
      else if (employeeData.addEmployee == "Add Intern") {
        return promptIntern();
      }
      // if neither, end prompt
      else {
        return;
      }
    });
};

// prompt user for input on team engineers
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
      // construct engineer object then push to employees.engineers array
      employees.engineers.push(constructEmployee(employeeData, "Engineer"));
      // if user chose to add engineer prompt engineer questions
      if (employeeData.addEmployee == "Add Engineer") {
        return promptEngineer();
      }
      // if user chose to add intern prompt intern questions
      else if (employeeData.addEmployee == "Add Intern") {
        return promptIntern();
      }
      // if neither, end prompt
      else {
        return;
      }
    });
};

// prompt user for input on team interns
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
      // construct intern object then push to employees.interns array
      employees.interns.push(constructEmployee(employeeData, "Intern"));
      // if user chose to add engineer prompt engineer questions
      if (employeeData.addEmployee == "Add Engineer") {
        return promptEngineer();
      }
      // if user chose to add intern prompt intern questions
      else if (employeeData.addEmployee == "Add Intern") {
        return promptIntern();
      }
      // if neither, end prompt
      else {
        return;
      }
    });
};

// construct an employee object based on employee object & role, employee object if no role included
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

// init app -- if mock in argv run with template with mock data, otherwise get user input
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
    // prompt user for team input
    promptManager()
      .then(() => {
        // generate html for team page based on input
        return generateHtml(employees);
      })
      .then((htmlData) => {
        // write html file that was generated
        return writeFile("./dist/index.html", htmlData);
      });
  }
};

init();
