const readlineSync= require('readline-sync');
const fs = require('fs')
const generateReadme = require('./readme');


const readmePath = './README.md';
const readmeother='./readme.md';

// Check if README already exists
function generate(){
if (fs.existsSync(readmePath) || fs.existsSync(readmeother)){
    console.log("readme file already exist")
}else{
const projectName = readlineSync.question('Enter project name: ');
const description = readlineSync.question('Enter project description: ');
const installation = readlineSync.question('Enter installation instructions: ');
const usage = readlineSync.question('Enter usage guidelines: ');
const license = readlineSync.question('Enter license information: ');

const readmeContent = generateReadme(projectName, description, installation, usage, license);

// Write the README file
fs.writeFileSync('README.md', readmeContent);

console.log('README.md generated successfully!');
}

}

module.exports=generate;