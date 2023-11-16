

function Rankine_to_Fahrenheit(r){
    if(!r){
        console.log("please provide temperature");
    }
    let f = r- 459.67
    return f;
}

function Rankine_info(){
    console.log('---> https://en.wikipedia.org/wiki/Rankine_scale')
}

module.exports={Rankine_to_Fahrenheit,Rankine_info};