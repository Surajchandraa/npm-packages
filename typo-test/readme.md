# typo-test
test your typing speed [words per minute] and accuracy

## Installation:
- for installation run the command-
```bash
    npm install typo-test
```

## Functions available-
1. calculatespeed(examplestring,callback) // for the calculation of speed in words per minute and accuracy.
2. randomstring() // returns the random strings.

## Usage-
>> **calculatespeed()**
- ***program***
```js

    const speed = require('typo-test');

    speed.calculatespeed("hi buddy how are you what are u doing",(err,out)=>{
        console.log(out);
    })
```

- ***output***
```bash

    Type this: "hi buddy how are you what are u doing"

    hi buddw how are you what are u doung // this will typed by user

      { accuracy: 77.779, wordsPerMinute: 28 }

```

>> **randomstring()**
- ***program***
```js
    const speed = require('typo-test');

    speed.calculatespeed(speed.randomstring(),(err,out)=>{
        console.log(out);
    })

```

- ***output***
```bash
    Type this: "Software development involves not just writing code but also understanding user needs and creating solutions that make a difference."

    softwaree development involves not just writing code but also understanding user needs and creating solution that make a difference

    { accuracy: 84.217, wordsPerMinute: 28 }
```