#!/usr/bin/env node
const get_file_location= require('./find')
let filename=process.argv[2];

get_file_location(filename, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("File Location:", result);
    }
});