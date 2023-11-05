#!/usr/bin/env node

const https = require('https');

const packageName = process.argv[2];

if (!packageName) {
  console.error('Please provide a package name.');
  process.exit(1);
}

const url = `https://registry.npmjs.org/${packageName}`;

https.get(url,(res)=>{

    let data='';

    res.on('data',(chunk)=>{
        data+=chunk;
    })

    res.on('end',()=>{
        let jsonData = JSON.parse(data);
        if (jsonData.error && jsonData.error === 'Not found') {
            console.log(`Package name '${packageName}' is available!`);
          } else {
            console.log(`Package name '${packageName}' is already taken.`);
          }
    });

    
}).on('error',(err)=>{
    console.log("Error "+err.message)
})

