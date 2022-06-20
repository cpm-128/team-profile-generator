// create Manager card template
const generateManager = function(manager) {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Manager</h4><i class="material-icons">content_paste</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                    <p class="office">Office Number: ${manager.officeNumber}</p>
                </div>
            </div>
        </div>
    `;
};

// create Engineer card template
const generateEngineer = function(engineer) {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${engineer.name}</h3>
                    <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${engineer.id}</p>
                    <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                    <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                </div>
            </div>
        </div>
    `;
};

// create Intern card template
const generateIntern = function(intern) {
    return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${intern.name}</h3>
                    <h4>Intern</h4><i class="material-icons">local_library</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${intern.id}</p>
                    <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                    <p class="school">School: ${intern.school}</p>
                </div>
            </div>
        </div>
    `;
};

// loop through array and push to page
generateHTML = (teamProfileArr) => {
    // array for cards
    pageArr = [];

    for (var i = 0; i < teamProfileArr.length; i++) {
        const employee = teamProfileArr[i];
        const role = employee.getRole();

        //console.log(">> employee: " , employee)
        //console.log(">> employee role: ", employee.role)

        // call manager
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArr.push(managerCard)
        };

        // call engineer
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArr.push(engineerCard);
        };

        // call intern
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArr.push(internCard);
        };
    };

    //console.log(pageArr);
    // join strings
    const employeeCards = pageArr.join('');

    // return to generated html
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
};

// generate html page with employeeCards
const generateTeamPage = function(employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team Portfolio</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    </head>

    <body>
        <header class="text-center">
            <h1>Team Portfolio</h1>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;
};

// export
module.exports = generateHTML;