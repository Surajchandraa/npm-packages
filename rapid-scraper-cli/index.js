#!/usr/bin/env node
const scraper = require('rapid-scraper');
let second_input=process.argv[2];
let third_input=process.argv[3];

switch(second_input){
    
    case 'description':
        scraper.description(third_input,(err,res)=>{
            if(err){
                console.error(err);
            }
            else{
                if(!res){
                    console.log('description not found')
                }
                console.log(res);
            }
        })
        break;

    case 'title':
        scraper.title(third_input,(err,res)=>{
            if(err){
                console.error(err);
            }
            else{
                if(!res){
                    console.log('title not found')
                }
                console.log(res);
            }
        })
        break;
    
    case 'links':
        scraper.links(third_input,(err,res)=>{
            if(err){
                console.error(err);
            }
            else{
                if(!res){
                    console.log('links not found')
                }
                console.log(res);
            }
        })
        break;
    case 'images':
        scraper.images(third_input,(err,res)=>{
            if(err){
                console.error(err);
            }
            else{

                if(!res){
                    console.log('images not found')
                }
                console.log(res);
            }
        })
        break;

    case 'social':
        scraper.social_media(third_input,(err,res)=>{
            if(err){
                console.error(err);
            }
            else{
                if(!res){
                    console.log('social media links not found')
                }
                console.log(res);
            }
        });
        break;
    case 'keywords':
        scraper.keywords(third_input,(err,res)=>{
            if(err){
                console.error(err);
            }
            else{
                if(!res){
                    console.log("keywords not found");

                }
                console.log(res);
            }
        })
        break;

    case 'para':
        scraper.paragraph(third_input,(err,res)=>{
            if(err){
                console.error(err);
            }
            else{
                if(!res){
                    console.log('paragraphs not found');
                }
                
                console.log(res);
            }
        })
        break;

    default:
        console.log('command not found')
}
