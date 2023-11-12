#!/usr/bin/env node
const morse = require('morse-conv');


let input = process.argv[2];
let textormorse = process.argv[3];

if(input==='morse-text'){
    let op=morse.morse_to_text(textormorse);
    console.log(op)
}
else if(input==='text-morse'){
    let op2=morse.text_to_morse(textormorse);
    console.log(op2)
}
else{
    console.log('command not found')
}