module.exports = htmltemplate => {
    const {Manager, Engineer, Intern, Project} = htmltemplate;
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
    <title>${Project.name}</title>
</head>

<body>
    <!-- Header -->
    <nav class="navbar">
        <div class="container-fluid justify-content-around">
            <a class="navbar-brand" href="#">${Project.name} Team</a>
        </div>
    </nav><br>
    <div class="container-fluid overflow-hidden">
        <!-- Managers card -->
        <div class="row justify-content-around" id="managers">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${Manager.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="fas fa-mug-hot"></i> Manager
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">:${Manager.id}</span>
                        </li>
                        <li class="list-group-item">
                            <i class="fas fa-phone"></i>
                            <span class="office-number">:${Manager.officeNumber}</span>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="mailto:${Manager.email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div><br>
        <!-- Engineers cards -->
        <div class="row justify-content-around" id="engineers">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${Engineer.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="fas fa-glasses"></i> Engineer
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">:${Engineer.id}</span>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="${Engineer.github}" target="_blank">
                                <i class="fab fa-github"></i> Github</a>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="mailto:${Engineer.email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>

        </div><br>
        <!-- Interns cards -->
        <div class="row justify-content-around" id="interns">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${Intern.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">
                        <i class="fas fa-user-graduate"></i> Intern
                    </h6>
                    <ul class="list-group">
                        <li class="list-group-item">
                            <i class="fas fa-id-card"></i>
                            <span class="id-number">:${Intern.id}</span>
                        </li>
                        <li class="list-group-item">
                            <i class="fas fa-school"></i>
                            <span class="school">:${Intern.school}</span>
                        </li>
                        <li class="list-group-item email-link">
                            <a href="mailto: ${Intern.email}">
                                <i class="fas fa-envelope-open-text"></i> Send Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>

</html>`
}