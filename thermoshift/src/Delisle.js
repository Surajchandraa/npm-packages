

function Delisle_to_Celsuis(d){
    if(!d){
        console.log("please provide temperature");
    }
    let c = (100-d)*(2/3)
    return c;
}

function Delisle_info(){
    console.log('---> https://en.wikipedia.org/wiki/Delisle_scale')
}


module.exports={Delisle_info,Delisle_to_Celsuis};