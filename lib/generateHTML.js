function generateCard(employee) {
  return ` <article class = "card">
    <h2 class = "card-title">
    ${employee.getName()}
    </h2>
    <h3 class = "card-subtitle">
    ${employee.getRole()}
    </h3>
    <ul class = "list-group">
    <li class = "list-group-item">
    ID: ${employee.id}
    </li>
    <li class = "list-group-item">
    Email: <a class = "card-link" href = "mailto:${employee.email}"> ${employee.email}</a>
    </li>
    ${generateRoleFields(employee)}
    </ul>
  </article>`;
}

function generateRoleFields(employee) {
  if (employee.getRole() == "Manager") {
    return `
        <li class = "list-group-item">
        Office Number: ${employee.officeNumber}
        </li>
        `;
  } else if (employee.getRole() == "Engineer") {
    return `
    <li class = "list-group-item">
    GitHub: <a class = "card-link" href = "https://www.github.com/${employee.getGithub()}"> ${employee.getGithub()}</a>
    </li>
        `;
  } else if (employee.getRole() == "Intern") {
    return `
        <li class ="list-group-item">
        School: ${employee.getSchool()}
        </li>
        `;
  } else {
    return "";
  }
}

function generateEmployeesHtml(employeeData) {
  var employeesText = ``;
  employeeData.forEach((employee) => {
    employeesText += generateCard(employee);
  });
  return employeesText;
}

function generateHTML(employeeData) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
    <title>Team Directory</title>
  </head>
  <body>
  <header>
  <h1>My Team</h1>
  </header>
  <main>
  ${generateEmployeesHtml(employeeData)}
  </main>
  </body>
</html>
    `;
}

module.exports = generateHTML;
