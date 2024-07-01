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
} else {
    // Handle invalid command input
    console.error("Invalid command. Use 'generate' or 'multiple-pass'.");
    process.exit(1);
}

module.exports = { generate, multiplepasswords };
