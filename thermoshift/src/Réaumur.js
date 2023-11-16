
function Reaumur_to_Celsius(r){
    if(!r){
        console.log("please provide temperature");
    }
    let c = (4/5)*r;
    return c;
}

function Reaumur_info(){
    console.log("---> https://en.wikipedia.org/wiki/R%C3%A9aumur_scale");
}

module.exports={Reaumur_info,Reaumur_to_Celsius};