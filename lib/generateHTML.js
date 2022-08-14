function generateCard(employee) {
  return ` <article class = "card">
    <h2 class = "card-title">
    ${employee.getName()}
    </h2>
    <h3 class = "card-subtitle">
    ${employee.getRole()}
    </h3>
  </article>`;
}

function generateEmployeesHtml(employeeData) {
var employeesText = ``;
  employeeData.forEach((employee) => {
    employeesText+= generateCard(employee);
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
