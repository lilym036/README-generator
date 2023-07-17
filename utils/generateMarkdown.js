// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown (response) {
  return `# ${response.title}
  https://img.shields.io/badge/license-${response.license}-red

## Description \n ${response.description}

## Table of Contents \n ${response.tableContents} \n
  *[Installation] (#installation) \n
  *[Usage] (#usage) \n
  *[Contributing] (#contributing) \n
  *[Tests] (#tests) \n
  *[License] (#license) \n
  *[Questions] (#questions) \n

## Installation \n ${response.installation}


## Usage \n ${response.usage}

## Contributing \n ${response.contributing}

## Tests \n ${response.tests}


## License \n ${response.license}


## Questions \n 

Please contact me if you have any questions. Below is my contact information:\n
Here is my GitHub information:
- username: ${response.username}
- link to profile: https://github.com/${response.username}

Here is my email: ${response.email}

`;
  
}

module.exports = generateMarkdown;
