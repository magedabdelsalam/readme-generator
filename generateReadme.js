function generateReadme(answer){
return `# ${answer.title}
${answer.description}
## Table Of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Credits](#credits)
* [License](#license)
## Installation
${answer.installation}
## Usage
${answer.usage}
## Contributing
${answer.contributing}
## Tests
${answer.tests}
## Questions
${answer.questions}
## License
${answer.license}
## Github
[${answer.github}](https://github.com/${answer.github})
## Email
${answer.email}`;
}

module.exports = generateReadme;