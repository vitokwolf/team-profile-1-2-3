const { writeFile, copyFile } = require('../utils/generate-site.js');

// generate employee card
const generateEmployee = templateArray => {
    let managerCards = '';
    let engineerCards = '';
    let internsCards = '';
    // itterate thru employee array and create cards for each one
    for (let i = 0; i < templateArray.length; i++) {

        if (templateArray[i].role === "Manager") {
            managerCards += `      
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${templateArray[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="fas fa-mug-hot"></i> ${templateArray[i].role}
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">: ${templateArray[i].id}</span>
                        </li>
                        <li class="list-group-item">
                            <i class="fas fa-phone"></i>
                            <span class="office-number">: ${templateArray[i].officeNumber}</span>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="mailto:${templateArray[i].email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>
            `;          
        } else if (templateArray[i].role === "Engineer") {
           engineerCards+= `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${templateArray[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="fas fa-glasses"></i> ${templateArray[i].role}
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">:${templateArray[i].id}</span>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="${templateArray[i].getGithub()}" target="_blank">
                                <i class="fab fa-github"></i> Github</a>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="mailto:${templateArray[i].email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>
           `;
        } else {
           internsCards += `
           <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${templateArray[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="fas fa-user-graduate"></i> ${templateArray[i].role}
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">:${templateArray[i].id}</span>
                        </li>
                        <li class="list-group-item">
                            <i class="fas fa-school"></i>
                            <span class="school">:${templateArray[i].school}</span>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="mailto: ${templateArray[i].email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>
           `;
        };
    };
    return `
         <!-- Managers card -->
        <div class="row justify-content-around">
            ${managerCards}
        </div><br>
        <!-- Engineers cards -->
        <div class="row justify-content-around">
            ${engineerCards}
        </div><br>
        <!-- Interns cards -->
        <div class="row justify-content-around">
            ${internsCards}
        </div><br>
        `;
};
//  generate the entire HTML
const generateHtml = htmlTemp => {
    console.log(htmlTemp);
    return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile</title>
</head>

<body>
    <!-- Header -->
    <nav class="navbar">
        <div class="container-fluid justify-content-around">
            <a class="navbar-brand" href="#">My Team</a>
        </div>
    </nav><br>
    <!-- Team Cards -->
    <div class="container-fluid overflow-hidden">
            ${generateEmployee(htmlTemp)}
    </div>
</body>

</html>`
};

// handler to generate html, write it to an html file and copy the style sheet
const handler = templateArray => {
    const file = generateHtml(templateArray);
    console.log('Team Profile has been Created!');
    writeFile(file)
    .then(() =>copyFile())
    .catch(err => {
        console.log(err);
    })   
}

module.exports = handler;