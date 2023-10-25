
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');


function store(directory,number_of_files,fieldname){
    try{
let storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,`${directory}/`)
    },
    filename:(req,file,cb)=>{
        const uniqueId = uuidv4();
        cb(null, file.fieldname+"-" +uniqueId+path.extname(file.originalname));
    }

})

let upload = multer({
    storage: storage
});

if(number_of_files===1){
return upload.single(fieldname);
}
else if(number_of_files>1){
    return upload.array(fieldname,number_of_files);
}
else if(number_of_files==null){
    return upload.array(fieldname)
}
else{
    throw new Error("please select right parameters")
}
    }
    catch(e){
        console.log(e)
    }
}

module.exports=store;

