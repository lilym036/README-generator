// a function that generates markdown for README
function generateMarkdown (response) {
return `# ${response.title}
![license ${response.license}](https://img.shields.io/badge/license-${response.license}-red)

## Description \n ${response.description}

## Table of Contents \n
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation \n ${response.installation}

## Usage \n ${response.usage}

## Contributing \n ${response.contributing}

## Tests \n ${response.tests}

## License \n 
This project is covered under the following license:\n
${response.license}

## Questions \n 

Please contact me if you have any questions. Below is my contact information:\n
Here is my GitHub information:
- username: ${response.username}
- link to profile: https://github.com/${response.username}

Here is my email: ${response.email}

`;
  
}

module.exports = generateMarkdown;
