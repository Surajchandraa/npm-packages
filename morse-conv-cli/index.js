#!/usr/bin/env node
const morse = require('morse-conv');



let input = process.argv[2];
let textormorse = process.argv[3];
let d=process.argv[4];

if(input==='morse-text'){
    if(!textormorse){
        console.log("please provide morse code");
        process.exit(1);
    }
    let op=morse.morse_to_text(textormorse);
    console.log(op)
}
else if(input==='text-morse'){
    if(!textormorse){
        console.log("please provide text")
        process.exit(1);
    }
    let op2=morse.text_to_morse(textormorse);
    console.log(op2)
}
else if(input=='--help'){
    console.log("Available commands");
    console.log("conv morse-test <morse data that you want to convert in the text");
    console.log("conv text-morse <text data you want to convert in the morse data");
}
else if(input=='--f'){
    if(textormorse=="text-morse"){
        if(!d){
            console.log("please provide file path");
        }
        else{
            morse.readfile(d,(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(morse.text_to_morse(result));
                }
            })
        }
    }
    else if(textormorse=="morse-text"){
        if(!d){
            console.log("please provide file path");
        }
        else{
            morse.readfile(d,(err,result)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(morse.morse_to_text(result));
                }
            })
        }

    }
}
else{
    console.log("invalid command");
}