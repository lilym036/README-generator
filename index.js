// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const url= require('url');
const generateResponses = require('./utils/generateMarkdown');
// console.log(generateResponses);


// TODO: Create an array of questions for user input
// const questions = [
function questions() {
return inquirer.prompt ([
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
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are the needed test instructions for your project?',
        name: 'tests',
    },
    {
        type: 'checkbox',
        message: 'Please choose your license type?',
        name: 'license',
        choices: ['MIT License', 'GNU AGPLv3', 'Apache License 2.0']
    },
    // {
    //     type: 'input',
    //     message: 'Do I have any additional questions?',
    //     name: 'questions',
    // },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'username',
    },
    {
        type: 'input',
    message: 'Enter your email.',
    name: 'email',
    },

// ];
]);
}


// inquirer.prompt(questions)
//     .then((response) => {
//         console.log(response);
//         fs.writeFile('response.txt', JSON.stringify(response, null, '\t'), (err) =>
//             err ? console.log(err) : console.log('Success!')
//         );
//        const generateAnswers= generateResponses(response);
//     });


function writeFile(data) {
    fs.writeFile('./sample/README.md', data,  (err) => 
    err ? console.log(err) : console.log('Success!')
      );
}
//     fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
//             err ? console.log(err) : console.log('Success!')
//       );
// }


    // TODO: Create a function to initialize app
// function init() {}


// Function call to initialize app
// init();

questions() 
.then((response) => {
    console.log(response);
    return generateResponses(response);
})
.then ((data) => {
    console.log(data);
    return writeFile(data);
})
.catch (err => {
     console.log(err)
})