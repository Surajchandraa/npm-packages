# rapid-scraper:
- Using this package you can scrap the specific data of a website. example- urls,images,text,title etc.

## Installation:
- `npm i rapid-scraper`

## Code example:
- ```js
    let scrap = require('rapid-scraper');
    scrap.links("https://github.com/Surajchandraa/Web-scraper-API",(error,result)=>{
    console.log(result);
    })
    

## functions provided:
- 
```js
    let scrap = require('rapid-scraper');
    scrap.links(url,callback) // for links
    scrap.paragraph(url,callback) //for paragraphs 
    scrap.title(url,callback) //for title
    scrap.images(url,callback) //extracts the src of images
    scrap.description(url,callback) 
    scrap.keywords(url,callback)
    scrap.social_media(url,callback) // using social_media function you can extract social media links of a website
