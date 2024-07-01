#!/usr/bin/env node

const { generate, multiplepasswords } = require("./src/generator");

// Capture the command and arguments from the command line
const command = process.argv[2];
const args = process.argv.slice(3);

// Helper function to parse integer values with a default fallback
function parseIntOrDefault(value, defaultValue) {
    const parsedValue = parseInt(value, 10);
    return isNaN(parsedValue) ? defaultValue : parsedValue;
}

// Helper function to parse boolean values
function parseBoolean(value) {
    return value === 'true';
}

// Helper function to parse command-line arguments into an options object
function parseArguments(args) {
    const options = {};
    for (let i = 0; i < args.length; i += 2) {
        const key = args[i];
        const value = args[i + 1];
        options[key] = value;
    }
    return options;
}

// Parse the command-line arguments into an options object
const options = parseArguments(args);

if (command === 'generate') {
    // Parse the necessary options for the 'generate' command
    const length = parseIntOrDefault(options['--length'] || options['-l'], 8);
    const numbers = parseBoolean(options['--numbers'] || options['-n'] || 'false');
    const specialChars = parseBoolean(options['--special'] || options['-s'] || 'false');
    const capitals = parseBoolean(options['--capitals'] || options['-c'] || 'false');

    // Generate and output the password
    console.log(generate(length, numbers, specialChars, capitals));
} else if (command === 'multiple-pass') {
    // Parse the necessary options for the 'multiple-pass' command
    const count = parseIntOrDefault(options['--count'] || options['-k'], 5);
    const length = parseIntOrDefault(options['--length'] || options['-l'], 8);
    const numbers = parseBoolean(options['--numbers'] || options['-n'] || 'false');
    const specialChars = parseBoolean(options['--special'] || options['-s'] || 'false');
    const capitals = parseBoolean(options['--capitals'] || options['-c'] || 'false');

    // Generate and output the passwords
    console.log(multiplepasswords(count, length, numbers, specialChars, capitals));
} else if(command==="--help"){
    console.log(`
        Usage:
          pswd <command> [options]
        
        Commands:
          generate        Generate a single password
          multiple-pass   Generate multiple passwords
        
        Options:
          -l, --length    Length of the password(s) (default: 8)
          -n, --numbers   Include numbers in the password(s) (default: false)
          -s, --special   Include special characters in the password(s) (default: false)
          -c, --capitals  Include capital letters in the password(s) (default: false)
          -k, --count     Number of passwords to generate (for 'multiple-pass', default: 5)
        
        Examples:
          pswd generate --length 12 --numbers true --special true --capitals true
          pswd multiple-pass --count 10 --length 20 --numbers true --special true --capitals true
          pswd --help   Display this help message
        `);
} 
else {
    // Handle invalid command input
    console.error("Invalid command. Use 'generate' or 'multiple-pass'.");
    process.exit(1);
}

module.exports = { generate, multiplepasswords };
