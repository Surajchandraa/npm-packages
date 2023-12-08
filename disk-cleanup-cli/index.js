const disk=require('disk-cleanup');
let option=process.argv[2];
let path=process.argv[3];


if(option=="temp"){
disk.removeTemporary(path,(err,out)=>{
    if(err){
        console.log("An error occured" + err);
    }
    else{
        console.log(out);
    }
})
}
else if(option=="greater"){
    disk.filterGreater(path,(err,out)=>{
        if(err){
            console.log("An error occured "+ err);
        }
        else{
            console.log(out);
        }
    })
}
else if(option=="smaller"){
    disk.filterSmaller(path,(err,out)=>{
        if(err){
            console.log("An error occured "+ err);
        }
        else{
            console.log(out);
        }
    })
}
else if(option=="equal"){
    disk.filterEqual(path,(err,out)=>{
        if(err){
            console.log("An error occured "+ err);
        }
        else{
            console.log(out);
        }
    })

}