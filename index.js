const fs = require("fs");
const inquirer = require("inquirer");

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
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        name: "officeNumber",
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
      employeeArr.push(employeeData);
      if (employeeData.confirmAdd) {
        return promptUser(employeeArr);
      } else {
        return employeeArr;
      }
    });
};

const init = function () {
  promptUser().then((employees) => {
    console.log(employees);
  });
};

init();
