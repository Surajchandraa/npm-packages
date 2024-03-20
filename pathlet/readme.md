# pathlet
Using this package you can find files and get their paths.

## Installation:
- Install package globally `npm i -g pathlet` or `npm i pathlet`

## code example:\

- require package as get_file_location and use

    ```js 
    const get_file_location = require('pathlet');

    get_file_location(filename, (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("File Location:", result);
    }
    });

    ```

## Input and output:
- ***Input***

    ```js
    get_file_location('computer.js', (error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log("File Location:", result);
    }
    });

    ```
- ***Output***
    ```bash
    File Location: /home/suraj/Desktop/packages/finder-cli/computer.js
    File Location: /home/suraj/Desktop/packages/finder-cli/com/computer.js 



## Usage:
- if you are in Desktop directory and search a specific file it will find all files of that exact name with extension in Desktop and all of its subdirectorires.

## contribution:
- feel free to contribute. 


   