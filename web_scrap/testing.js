const {paragraph,title,links,images,description, keywords}=require("./index")
let para_string=links("https://github.com/Surajchandraa/Web-scraper-API",(error,result)=>{
    console.log(result)
})
