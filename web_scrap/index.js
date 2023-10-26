const request = require('request');
const cheerio = require('cheerio');





function paragraph(url,callback){
request(url,(error,response,body)=>{
    if(!error && response.statusCode==200){
        const $ = cheerio.load(body);
    
    
    const pageTitle = $('p').text();
    callback(null,pageTitle)
    }
    else{
    callback(error)
    }
})
}




function title(url,callback){
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $ = cheerio.load(body);
        
        
        const pageTitle = $('title').text();
        callback(null,pageTitle)
        }
        else{
            callback(error)
        }
    })
    }


function links(url,callback){
    let link=[];
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $ = cheerio.load(body);
           $('a').each((index,element)=>{
            link[index] = $(element).attr('href');
            
           })

           callback(null,link)
        }
        else{
            callback(error)
        }
    })
}

function images(url,callback){
    let image=[];
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $= cheerio.load(body);
            $('img').each((index,element)=>{
                image[index] = $(element).attr('src');

            })
            callback(null,image)
        }
        else{
            callback(error)
        }
    })
}


function description(url,callback){
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $ =cheerio.load(body)
            const title=$('title');
            const des = $('meta[name="description"]').attr('content');
            callback(null,des)
        }
        else{
            callback(error)
        }
    })
}


function keywords(url,callback){
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
            const $ =cheerio.load(body)
            const title=$('title');
            const key = $('meta[name="keywords"]').attr('content');
            callback(null,key)
        }
        else{
            callback(error)
        }
    })
}

function social_media(url,callback){
    request(url,(error,response,body)=>{
        if(!error && response.statusCode==200){
        const $ = cheerio.load(body);
        let socialmedia={};
        $('a').each((index,element)=>{
            const href = $(element).attr('href');
            if(href){
                if(href.includes('facebook.com')){
                    socialmedia.facebook=href;
                }
                else if(href.includes('instagram.com')){
                    socialmedia.instagram=href;
                }
                else if(href.includes('linkedin.com')){
                    socialmedia.linkedin=href;
                }
                else if(href.includes('twitter.com')){
                    socialmedia.twitter=href;
                }
                else if(href.includes('github.com')){
                    socialmedia.github=href;
                }
                else if(href.includes('youtube.com')){
                    socialmedia.youtube=href;
                }
                else if(href.includes('pinterest.com')){
                    socialmedia.pinterest=href;
                }
                else if(href.includes('tiktok.com')){
                    socialmedia.tiktok=href;
                }
                else if(href.includes('reddit.com')){
                    socialmedia.reddit=href;
                }
                else if(href.includes('discord.com')){
                    socialmedia.discord=href;
                }
                else if(href.includes('skype.com')){
                    socialmedia.skype=href;
                }
                else if(href.includes('whatsapp.com')){
                    socialmedia.whatsapp=href;
                }
                else if(href.includes('tumblr.com')){
                    socialmedia.tumblr=href;
                }
                else if(href.includes('quora.com')){
                    socialmedia.quora=href;
                }
                
            }
        })
        if (Object.keys(socialmedia).length === 0) {
            socialmedia.not_found = "no links found";
        }

        callback(null,socialmedia)

        }
        else{
            callback(error)
        }
    })
}
module.exports={
    paragraph,
    title,
    links,
    images,
    description,
    keywords,
    social_media
}