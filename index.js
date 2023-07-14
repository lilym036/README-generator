// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of the README?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Provide a decripction of your project.',
        name: 'description',
    },
    {
        type: 'confirm',
        message: 'Does your README include a Table of Contents?',
        name: 'tableContents',
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'List your collaborators, if any.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test',
    },
    {
        type: 'checkbox',
        message:'Please choose your license type?',
        name: 'license',
        choices: ['MIT License', 'GNU AGPLv3', 'Apache License 2.0']
    }
];


inquirer.prompt(questions)
    .then((response) => {
        console.log(response);
        fs.writeFile(`${response.name}.txt`, JSON.stringify(response, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );

    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
