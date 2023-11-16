
function Kelvin_to_Celsius(k){
    if(!k){
        console.log("please provide temperature");
    }
    let c= k -273.15;
    return c;
}

function Kelvin_to_Fahrenheit(k){
    if(!k){
        console.log("please provide temperature");
    }
    let f=(k-459.67)*(9/5);
    return f;
}

function Kelvin_info(){
    console.log('---> https://en.wikipedia.org/wiki/Kelvin#History')
}

module.exports={Kelvin_info,Kelvin_to_Celsius,Kelvin_to_Fahrenheit};