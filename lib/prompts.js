const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Manager = require('./Manager');
const Intern = require('./Intern');
const handler = require('../src/html-template');

// initialize the prompts answers array
const templateArray = [];

// start with the general questions assigned to all employees
const init = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter Employee Name.(Required)',
                name: 'name',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('')
                    }
                }
            },
            {
                type: 'input',
                message: "Please enter Employee ID number.(Required)",
                name: 'id',
                validate: idInput => {
                    const pass = idInput.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";

                }
            },
            {
                type: 'input',
                message: "Please enter Employee Email.(Required)",
                name: 'email',
                validate: emailInput => {
                    const pass = emailInput.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";

                }
            },
            {
                type: 'list',
                message: 'What is the Role of the Employee?',
                name: 'role',
                choices: ['Manager', 'Engineer', 'Intern']
            }
        ])
        // based on the role chosen callback the function
        .then(data => {
            if (data.role === 'Manager') {
                managerPrompt(data)
            } else if (data.role === 'Intern') {
                internPrompt(data)
            } else {
                engineerPrompt(data)
            }
        })
};

// callback for manager
const managerPrompt = (answers) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the Managers office number.(Required)',
                name: 'officeNumber',
                validate: numberInput => {
                    if (numberInput) {
                        return true;
                    } else {
                        console.log('Manager office number is required!')
                    }
                }
            }
        ])
        //construct a Manager class from the answers provided 
        .then(data => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.role, data.officeNumber);
            // add it to the employees array
            templateArray.push(manager)
            // check if done adding emloyees
            confirmDone();
        });
};

// callback for intern
const internPrompt = (answers) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'What school does the intern attend?(Required)',
                name: 'school',
                validate: internInput => {
                    if (internInput) {
                        return true;
                    } else {
                        console.log('You must enter the school the intern attends!')
                    }
                },

            }
        ])
        //construct an Intern class from the answers provided 
        .then(data => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.role, data.school);
            // add it to the employees array
            templateArray.push(intern);
            // check if done adding emloyees
            confirmDone();
        });
};

// callback for engineer
const engineerPrompt = (answers) => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please provide the Engineer Github username?(Required)',
                name: 'github',
                validate: Github => {
                    if (Github) {
                        return true;
                    } else {
                        console.log('Engineer Github username is required!')
                    }
                }
            }
        ])
        //construct an Emgineer class from the answers provided 
        .then(data => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, data.github);
            // add it to the employees array
            templateArray.push(engineer);
            // check if done adding emloyees
            confirmDone();
        });
};

//  prompt to create the file when the user is done entering data
const confirmDone = () => {
    return inquirer
        .prompt([
            {
                type: 'confirm',
                message: 'Would you like to add another employee?',
                name: 'done',
                default: false
            }
        ])
        .then(data => {
            if (data.done === true) {
                init();
            } else {
                handler(templateArray);
            }
        });
};

module.exports = init;