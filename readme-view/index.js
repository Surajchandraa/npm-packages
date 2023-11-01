#!/usr/bin/env node
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import opn from 'opn';






const md = new MarkdownIt();

function previewReadme(readmePath) {
    const readmeContent = fs.readFileSync(readmePath, 'utf-8');
    const htmlContent = md.render(readmeContent);
    return htmlContent;
}



function main(){
    let readmePath = process.argv[2];

    if(!readmePath){
        console.log(` readme path is  invalid path`);
        process.exit(1);
    }

    const htmlcontent = previewReadme(readmePath);
    let temphtml = `temp.html`;

    fs.writeFileSync(temphtml, htmlcontent, 'utf-8');

    opn(temphtml, { wait: false }, (err) => {
        if (err) {
            console.error('Error opening browser:', err);
        }
    });

   
}



main();
