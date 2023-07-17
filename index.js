// these are the needed packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateResponses = require('./utils/generateMarkdown');
// console.log(generateResponses);

// this function holds the questions that the user will be asked
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
        choices: ['MIT', 'GPL_3.0', 'Apache_2.0']
    },
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


function writeFile(response) {
    fs.writeFile('./sample/README.md', response,  (err) => 
    err ? console.log(err) : console.log('Success!')
      );
}
//     fs.writeFile('README.md', JSON.stringify(data, null, '\t'), (err) =>
//             err ? console.log(err) : console.log('Success!')
//       );
// }



// Function call to initialize app
questions() 
.then((response) => {
    console.log(response);
    return generateResponses(response);
})
.then ((response) => {
    return writeFile(response);
})
.catch (err => {
     console.log(err)
})