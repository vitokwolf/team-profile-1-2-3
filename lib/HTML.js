const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const { validate } = require('@babel/types');

class PageHtml {
    constructor() {
        this.project = '';
        this.managers = [];
        this.engineers = [];
        this.interns = [];
    }

    getProjectName() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'project',
                message: 'What is the project name your team is assigned to?(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide a project name your team is assigned to!');
                        return false;
                    }
                }
            }
        ]).then(({ project }) => {
            this.project = project;
            console.log(this.project);
            return this.getAction();
        })
    }

    getAction() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do next?',
                choices: ['Add managers', 'Add engineers', 'Add interns', 'Exit']
            }
        ])
            .then(({ action }) => {
                if (action === 'Add managers') {
                    return this.getManagers();
                } else if (action === 'Add engineers') {
                    return this.getEngineers();
                } else if (action === 'Add interns') {
                    return this.getInterns();
                } else {
                    console.log('All data collected');
                    console.log(`
                name-${this.project},
                managers-${this.managers},
                interns-${this.interns},
                engineers-${this.engineers}
                `);
                    return;
                }
            })
    }

    getManagers() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name of the Manager?(Required)',
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Please provide Manager name!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is ID number of the Manager?(Required)',
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Please provide Manager ID!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'What is the email of the Manager?(Required)',
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Please provide Manager email!');
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: 'What is the office number of the Manager?(Required)',
                    validate: userInput => {
                        if (userInput) {
                            return true;
                        } else {
                            console.log('Please provide Manager office number!');
                            return false;
                        }
                    }
                }
            ]).then(({ name, id, email, officeNumber }) => {
                this.managers.push(new Manager(name, id, email, officeNumber));
                console.log(this.managers);
                return this.getAction();
            })
    }

    getEngineers() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Engineer?(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide Engineer name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is ID number of the Engineer?(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide Engineer ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the Engineer?(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide Engineer email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the github username of the Engineer?(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide Engineer github username!');
                        return false;
                    }
                }
            }
        ]).then(({ name, id, email, github }) => {
            this.engineers.push(new Engineer(name, id, email, github));
            console.log(this.engineers);
            return this.getAction();
        })
    }

    getInterns() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Intern?(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide Intern name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is ID number of the Intern?(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide Intern ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the email of the Intern?(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide Intern email!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the school name of the Intern?(Required)',
                validate: userInput => {
                    if (userInput) {
                        return true;
                    } else {
                        console.log('Please provide Intern school name!');
                        return false;
                    }
                }
            }
        ]).then(({ name, id, email, school }) => {
            this.interns.push(new Intern(name, id, email, school));
            console.log(this.interns);
            return this.getAction();
        })
    }
};


module.exports = PageHtml;
