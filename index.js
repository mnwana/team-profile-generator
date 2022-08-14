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
        name: "confirmAdd",
        message: "Would you like to add another employee?",
        type: "confirm",
      }
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
