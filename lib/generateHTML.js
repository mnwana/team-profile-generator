function generateManagerHtml(managers) {
  var managersText = ``;
  managers.forEach((manager) => {
    managersText += `
    <article class = "card col-3">
    <h2 class = "card-title">
    ${manager.getName()}
    </h2>
    <h3 class = "card-subtitle">
    Manager
    </h3>
    <ul class = "list-group">
    <li class = "list-group-item">
    ID: ${manager.id}
    </li>
    <li class = "list-group-item">
    Email: <a class = "card-link" href = "mailto:${manager.email}"> ${
      manager.email
    }</a>
    </li>
    <li class = "list-group-item">
        Office Number: ${manager.officeNumber}
        </li>
    </ul>
  </article>`;
  });
  return managersText;
}

function generateEngineerHtml(engineers) {
  var engineersText = ``;
  engineers.forEach((engineer) => {
    employeesText += ` <article class = "card col-3">
    <h2 class = "card-title">
    ${engineer.getName()}
    </h2>
    <h3 class = "card-subtitle">
    Engineer
    </h3>
    <ul class = "list-group">
    <li class = "list-group-item">
    ID: ${engineer.id}
    </li>
    <li class = "list-group-item">
    Email: <a class = "card-link" href = "mailto:${engineer.email}"> ${
      engineer.email
    }</a>
    </li>
    <li class = "list-group-item">
    GitHub: <a class = "card-link" href = "https://www.github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a>
    </li>
    </ul>
  </article>`;
  });
  return engineersText;
}

function generateInternHtml(interns) {
  var internsText = ``;
  interns.forEach((intern) => {
    internsText += ` <article class = "card col-3">
    <h2 class = "card-title">
    ${intern.getName()}
    </h2>
    <h3 class = "card-subtitle">
   Intern
    </h3>
    <ul class = "list-group">
    <li class = "list-group-item">
    ID: ${intern.id}
    </li>
    <li class = "list-group-item">
    Email: <a class = "card-link" href = "mailto:${intern.email}"> ${
      intern.email
    }</a>
    </li>
    <li class ="list-group-item">
    School: ${intern.getSchool()}
    </li>
    </ul>
  </article>`;
  });
  return internsText;
}

function generateHTML(employees) {
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
  <main class = "row container">
  ${generateManagerHtml(employees.managers)}

  ${generateEngineerHtml(employees.engineers)}

  ${generateInternHtml(employees.interns)}
  </main>
  </body>
</html>
    `;
}

module.exports = generateHTML;
