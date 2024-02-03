const count = require("./index")

function testCharCount() {
  const text = "This is an example text. It has multiple sentences.\nEach sentence is on a new line.";
  const expected = 83;
  const actual = count.charCount(text);
  console.assert(actual === expected, `Character count test failed: expected ${expected}, got ${actual}`);
}

function testWordCount() {
  const text = "This is an example text. It has multiple sentences.\nEach sentence is on a new line.";
  const expected = 16;
  const actual = count.wordCount(text);
  console.assert(actual === expected, `Word count test failed: expected ${expected}, got ${actual}`);
}

function testSenCount(){
    const text="This is an example text. It has multiple sentences.\nEach sentence is on a new line.";
    const expected=3;
    const actual=count.senCount(text);
    console.assert(actual===expected, `sentence count test failed: expected ${expected}, got ${actual}`);
}

function testLineCount(){
    const text="This is an example text. It has multiple sentences.\nEach sentence is on a new line.\n try it."
 const expected=3;
const actual=count.senCount(text);
console.assert(actual===expected, `Lines count test failed: expected ${expected}, got ${actual}`);
}

function testMostCommonWord() {
    const text = "This is an example text. It will have multiple common words like example text,text and is";
    const num = 2; 
    const expectedWords = ["text", "is"]; 

    const result = count.mostCommonwords(text, num);

    const resultWords = Object.keys(result);

    
    if (resultWords.length !== num) {
        console.log(`Most common words test failed: expected ${num} words, got ${resultWords.length}`);
        return;
    }

    for (let i = 0; i < num; i++) {
        if (resultWords[i] !== expectedWords[i]) {
            console.log(`Most common words test failed: expected word "${expectedWords[i]}" at position ${i + 1}, got "${resultWords[i]}"`);
            return;
        }
    }

    console.log("Most common words test passed!");
}


function testMostCommonCharacters() {
    const text = "This is an example text. It will have multiple common characters like e, t, x, and s";
    const num = 3; 
    const expectedCharacters = ['e', 'a', 'l']; 

    const result = count.mostCommonChar(text, num);

    const resultCharacters = Object.keys(result);

    
    if (resultCharacters.length !== num) {
        console.log(`Most common characters test failed: expected ${num} characters, got ${resultCharacters.length}`);
        return;
    }

    
    for (let i = 0; i < num; i++) {
        if (resultCharacters[i] !== expectedCharacters[i]) {
            console.log(`Most common characters test failed: expected character "${expectedCharacters[i]}" at position ${i + 1}, got "${resultCharacters[i]}"`);
            return;
        }
    }

    console.log("Most common characters test passed!");
}







function runTests() {
  console.log("Running tests...");
  testCharCount();
  testWordCount();
  testSenCount();
  testLineCount();
  testMostCommonWord();
  testMostCommonCharacters();

  console.log("All tests completed.");
  
}

runTests();
