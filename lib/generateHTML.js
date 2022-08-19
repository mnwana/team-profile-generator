// file to generate article for each manager in the manager array
function generateManagerHtml(managers) {
  var managersText = ``;
  managers.forEach((manager) => {
    managersText += `
    <article class = "card col-12 col-lg-3 p-0 mt-2">
    <h2 class = "card-title text-center bg-dark text-white pr-0">
    ${manager.getName()}
    </h2>
     <h2 class = "card-title text-center">
    Manager
    </h3>
    <ul class = "list-group p-2">
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

// file to generate article for each engineer in the engineer array
function generateEngineerHtml(engineers) {
  var engineersText = ``;
  engineers.forEach((engineer) => {
    engineersText += ` 
    <article class = "card col-sm-12 col-lg-3 p-0 mt-2">
    <h2 class = "card-title text-center bg-dark text-white">
    ${engineer.getName()}
    </h2>
     <h2 class = "card-title text-center">
    Engineer
    </h3>
    <ul class = "list-group p-2">
    <li class = "list-group-item">
    ID: ${engineer.id}
    </li>
    <li class = "list-group-item">
    Email: <a class = "card-link" href = "mailto:${engineer.email}"> ${
      engineer.email
    }</a>
    </li>
    <li class = "list-group-item">
    GitHub: <a class = "card-link" target="_blank" href = "https://www.github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a>
    </li>
    </ul>
  </article>`;
  });
  return engineersText;
}

// file to generate article for each intern in the intern array
function generateInternHtml(interns) {
  var internsText = ``;
  interns.forEach((intern) => {
    internsText += ` 
    <article class = "card col-sm-12 col-lg-3 p-0 mt-2">
    <h2 class = "card-title text-center bg-dark text-white">
    ${intern.getName()}
    </h2>
     <h2 class = "card-title text-center">
   Intern
    </h3>
    <ul class = "list-group p-2">
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

// function to generate text for html file that calls functions to creat articles for manager, engineer then intern
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
  <body class = "bg-light">
  <header>
  <h1 class = "text-center bg-secondary text-white w-100">My Team</h1>
  </header>
  <main class = "row justify-content-around col-11 pt-4 mx-auto">
  ${generateManagerHtml(employees.managers)}

  ${generateEngineerHtml(employees.engineers)}

  ${generateInternHtml(employees.interns)}
  </main>
  </body>
</html>
    `;
}

module.exports = generateHTML;
