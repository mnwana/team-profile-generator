const fs = require("fs");
const inquirer = require("inquirer");
const { Employee, Intern, Manager, Engineer } = require("./lib/classes");
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
      employeeArr.push(constructEmployee(employeeData,employeeData.role));
      if (employeeData.confirmAdd) {
        return promptUser(employeeArr);
      } else {
        return employeeArr;
      }
    });
};

const promptManager = function (employeeArr) {
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
          when: ({ role }) => {
            return role == "Manager";
          },
        },
  
        {
          name: "confirmAdd",
          message: "Would you like to add another Manager?",
          type: "confirm",
        },
      ])
      .then((employeeData) => {
        employeeArr.push(constructEmployee(employeeData,'Manager'));
        if (employeeData.confirmAdd) {
          return promptUser(employeeArr);
        } else {
          return employeeArr;
        }
      });
  };

  const promptEngineer = function (employeeArr) {
    if (!employeeArr) {
      employeeArr = [];
    }
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
          when: ({ role }) => {
            return role == "Engineer";
          },
        },
        {
          name: "confirmAdd",
          message: "Would you like to add another engineer?",
          type: "confirm",
        },
      ])
      .then((employeeData) => {
        employeeArr.push(constructEmployee(employeeData,'Engineer'));
        if (employeeData.confirmAdd) {
          return promptUser(employeeArr);
        } else {
          return employeeArr;
        }
      });
  };

  const promptIntern = function (employeeArr) {
    if (!employeeArr) {
      employeeArr = [];
    }
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
          when: ({ role }) => {
            return role == "Intern";
          },
        },
  
        {
          name: "confirmAdd",
          message: "Would you like to add another intern?",
          type: "confirm",
        },
      ])
      .then((employeeData) => {
        employeeArr.push(constructEmployee(employeeData, 'Intern'));
        if (employeeData.confirmAdd) {
          return promptUser(employeeArr);
        } else {
          return employeeArr;
        }
      });
  };

const constructEmployee = function (empObj,role) {
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
    // console.log(mockData);
    return writeFile("index.html", generateHtml(mockData));
  } else {
    promptUser()
      .then((employees) => {
        // console.log(employees);
        return generateHtml(employees);
      })
      .then((htmlData) => {
        return writeFile("index.html", htmlData);
      });
  }
};

const mockData = [
  new Manager("Marielle", "1", "mnwana@gmail.com", "1"),
  new Intern("Molly", "2", "molly@cat.com", "Meowniversity of Catty"),
  new Engineer("Will", "3", "willy@gmail.com", "willy123"),
  new Employee("Nacho", "4", "nachomama@gmail.com"),
];

init();
