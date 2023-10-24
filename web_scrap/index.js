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
module.exports={
    paragraph,
    title,
    links,
    images,
    description,
    keywords
}