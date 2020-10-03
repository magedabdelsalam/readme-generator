function generateReadme(answer){
    if(answer.license === 'CC'){
        badge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    } else if(answer.license === 'ISC'){
        badge = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    } else if(answer.license === 'MIT'){
        badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if(answer.license === 'Unlicense'){
        badge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    } 
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
* ${answer.email}
* [${answer.github}](https://github.com/${answer.github})
## License
${badge}`;
}

module.exports = generateReadme;