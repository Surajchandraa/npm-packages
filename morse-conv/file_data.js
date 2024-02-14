const fs=require("fs");

function readfile(path,callback){
    fs.readFile(path,'utf8',(error,result)=>{
        if(error){
            callback(error,null);
        }
        else{
            callback(null,result);
        }
    })
}

module.exports=readfile;