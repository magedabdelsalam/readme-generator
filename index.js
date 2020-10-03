const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const {questions} = require("./questions.js");
const generateReadme = require("./generateReadme.js");

const writeFilePromise = util.promisify(fs.writeFile)

async function init(){
    const answers = await inquirer.prompt(questions);
    const readmeString = generateReadme(answers);
    await writeFilePromise("README.md",readmeString);
}

init();