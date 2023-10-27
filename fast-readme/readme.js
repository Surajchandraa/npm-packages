function generate(projectName, description, installation, usage, license) {
    const readmeContent = `
# ${projectName}

 ## Description
    ${description}

## Installation
    ${installation}

## Usage
    ${usage}

## License
    ${license}
    `;

    return readmeContent;
}

module.exports = generate;