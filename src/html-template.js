const writeFile = require('../utils/generate-site');

const generateEmployee = templateArray => {
    let textString = '';
    console.log(templateArray);
    for (let i = 0; i < templateArray.length; i++) {

        if (templateArray[i].role === "Intern") {
            var icon = '<i class="fas fa-user-graduate"></i>';
            var htmlString = `
            <li class="list-group-item">
                <i class="fas fa-school"></i>
                <span class="school">:${school}</span>
            </li>
            `;
        } else if (templateArray[i].role === "Manager") {
            var icon = '<i class="fas fa-mug-hot"></i>';
            var htmlString = `
            <li class="list-group-item">
                <i class="fas fa-phone"></i>
                <span class="office-number">:${officeNumber}</span>
            </li>`;
        } else {
            var icon = '<i class="fas fa-glasses"></i>';
            var htmlString = `
            <li class="list-group-item email-link">
                <a href="${github}" target="_blank">
                <i class="fab fa-github"></i> Github</a>
            </li>
            `;
        }


        textString += `
        <div class="row justify-content-around">         
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${templateArray[i].name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                       ${icon} ${templateArray[i].role}
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">: ${templateArray[i].id}</span>
                        </li>
                        ${htmlString}
                        <li class="list-group-item email-link">
                            <a href="mailto:${templateArray[i].email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }
    return textString;
};

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
    <div class="container-fluid overflow-hidden">
         ${generateEmployee(templateArray)}
    </div>
</body>

</html>`
};

const handler = (templateArray) => {

    const file = generateIndex(templateArray)
    writeFile(file);
    console.log('success!')

}

module.exports = handler;