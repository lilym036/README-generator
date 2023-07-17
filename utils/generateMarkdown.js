// a function that generates markdown for README
function generateMarkdown (response) {
return `# ${response.title}
![license ${response.license}](https://img.shields.io/badge/license-${response.license}-red)

## Description 
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation 
${response.installation}

## Usage
${response.usage}

## License
This project is covered under the following license:\n
${response.license}

## Contributing 
${response.contributing}

## Tests
${response.tests}

## Questions

Please contact me if you have any questions. Below is my contact information.\n
Here is my GitHub information:
- username: ${response.username}
- link to profile: https://github.com/${response.username}

Here is my email: ${response.email}

`;
  
}

module.exports = generateMarkdown;
