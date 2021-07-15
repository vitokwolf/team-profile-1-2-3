// function to iterate thru managers array
const generateManagers = managersArr => {
    return `
        <!-- Managers card -->
        <div class="row justify-content-around" id="managers">
        ${managersArr
            .map(({ name, id, email, officeNumber }) => {
                return `        
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="fas fa-mug-hot"></i> Manager
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">:${id}</span>
                        </li>
                        <li class="list-group-item">
                            <i class="fas fa-phone"></i>
                            <span class="office-number">:${officeNumber}</span>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="mailto:${email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>`
            }).join('')}
        </div><br>
        `
};

// function to iterate thru engineers array
const generateEngineers = engineersArr => {
    return `
        <!-- Engineers cards -->
        <div class="row justify-content-around" id="engineers">
        ${engineersArr
            .map(({ name, id, email, github }) => {
                return `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="fas fa-glasses"></i> Engineer
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">:${id}</span>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="${github}" target="_blank">
                                <i class="fab fa-github"></i> Github</a>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="mailto:${email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>`
            }).join('')}
        </div><br>
        `
};

// function to iterate thru managers array
const generateInterns = internsArr => {
    return `
     <!-- Interns cards -->
        <div class="row justify-content-around" id="interns">
        ${internsArr
        .map(({name,id,email,school}) => {
            return `
             <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="fas fa-user-graduate"></i> Intern
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">:${id}</span>
                        </li>
                        <li class="list-group-item">
                            <i class="fas fa-school"></i>
                            <span class="school">:${school}</span>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="mailto: ${email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>`
        }).join('')}           
        </div>
    `
}

module.exports = htmltemplate => {
    const { project, managers, engineers, interns } = htmltemplate;
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
    <title>${project}</title>
</head>

<body>
    <!-- Header -->
    <nav class="navbar">
        <div class="container-fluid justify-content-around">
            <a class="navbar-brand" href="#">${project} Team</a>
        </div>
    </nav><br>
    <div class="container-fluid overflow-hidden">
        ${generateManagers(managers)}
        ${generateEngineers(engineers)}     
        ${generateInterns(interns)}
    </div>
</body>

</html>`
}