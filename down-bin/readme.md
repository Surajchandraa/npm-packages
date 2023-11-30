# down-bin

A simple Node.js module to download binary files from a provided URL.

## Installation:

Install the package via npm:

```bash
npm install down-bin
```


## Usage:


```bash
    const downloadFile = require('down-bin');

    // Usage example
    const fileUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
    downloadFile(fileUrl);

```
- The downloadFile function allows you to download binary files from a given URL. It retrieves the file based on the provided URL and saves it with its original filename in the current directory.

## Function Parameters
- url: The URL of the file to be downloaded.

## Behavior
- Downloads the file from the provided URL.
- Determines if the file is binary based on the content-type header.
- Excludes HTML content from downloading.

