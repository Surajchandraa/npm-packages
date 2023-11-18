#!/usr/bin/env node
const count = require('text-count');
const fs = require('fs');

let inp= process.argv[2];
let inp2=process.argv[3];
let inp3= process.argv[4];
if(inp=="char"){
    if(!inp2){
        console.log("please enter some text")
    }
    else{
    console.log(count.char_count(inp2));
    }
}
else if(inp=="word"){
    if(!inp2){
        console.log("please enter some text");
    }
    else{
        console.log(count.word_count(inp2))
    }
}
else if(inp=="sen"){
    if(!inp2){
        console.log("please enter some text");
    }
    else{
        console.log(count.sen_count(inp2));
    }
}
else if(inp=="line"){
    if(!inp2){
        console.log("please enter some text");
    }
    else{
        console.log(count.line_count(inp2))
    }
}
   

if(inp=='-f'){
    if(inp2=='word'){
        if(!inp3){
            console.log("please enter file path");
        }
        else{
            fs.readFile(inp3,'utf-8',(err,data)=>{
                if(err){
                    console.log("error while reading file");
                }
                else{
                    console.log(count.word_count(data));
                }
            })
        }
    }
    else if(inp2=="char"){
        if(!inp3){
            console.log("please enter file path");
        }
        else{
            fs.readFile(inp3,'utf-8',(err,data)=>{
                if(err){
                    console.log("error while reading file");
                }
                else{
                    console.log(count.char_count(data));
                }
            })
        }
    }
    else if(inp2=='line'){
        if(!inp3){
            console.log("please provide file path");

        }
        else{
            fs.readFile(inp3,'utf-8',(err,data)=>{
                if(err){
                    console.log("error while reading file");
                }
                else{
                    console.log(count.line_count(data));
                }
            })
        }
    }
    else if(inp2=="sen"){
        if(!inp3){
            console.log("please provide file path");

        }
        else{
            fs.readFile(inp3,'utf-8',(err,data)=>{
                if(err){
                    console.log("error while reading file");
                }
                else{
                    console.log(count.sen_count(data));
                }
            })
        }

    }
}