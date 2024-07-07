# Status code check:
- The http-status-codes package simplifies working with HTTP status codes in Node.js applications. It provides an easy-to-use mapping of common HTTP status codes to their corresponding messages, making it effortless for developers to convey response statuses in their applications.

## Installation:
- `npm i check_status_code`

## Code example:

- ```js
    const code=require('check_status_code');
    console.log(code.StatusCode[200])
    

## Code example2:

- 
```js
const axios = require('axios');
const status_code = require('check_status_code');

const URL = 'https://jsonplaceholder.typicode.com/posts/1'; // Example URL

axios.get(URL)
  .then(response => {
    const statusCode = response.status;
    const statusMeaning = StatusCode[statusCode] || 'Unknown';
    
    console.log(`Status Code: ${statusCode}`);
    console.log(`Status Meaning: ${statusMeaning}`);
    console.log('Response Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  

