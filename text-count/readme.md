# text-count
This is a simple JavaScript utility for analyzing text. It provides functions to count characters, words, sentences, and lines in a given text.

## Installation:

- ```bash
    npm install text-count
    ```

## Features:
- count number of lines in a given text or in a file.
- count number of words.
- count total characters.
- count sentences in given text.
- count most common words.
- most common characters.

## Usage:
- To use this utility, you can import the functions into your JavaScript code:

```js
    const count = require('text-count');

    // Example Usage
    const text = "This is an example text. It has multiple sentences.\nEach sentence is on a new line.";

    console.log("Character Count:", count.charCount(text));
    console.log("Word Count:", count.wordCount(text));
    console.log("Sentence Count:", count.senCount(text));
    console.log("Line Count:", count.lineCount(text));

  //  >>Character Count: 83
  //  >>Word Count: 16
   // >>Sentence Count: 3
   // >>Line Count: 2

```

## Count from a file:
```js
    const fs = require('fs');
    const count = require('text-count')

    
    const filePath = 'example_file.txt';


    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            return;
        }

        console.log("Character Count:", count.charCount(data));
        console.log("Word Count:", count.wordCount(data));
        console.log("Sentence Count:", count.senCount(data));
        console.log("Line Count:", count.lineCount(data));
    });

```
- ***Output***
```bash
Character Count: 97
Word Count: 18
Sentence Count: 1
Line Count: 2
```
