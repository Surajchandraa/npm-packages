

function Fahrenheit_to_Celsius(f){

    if(!f){
        console.log("please provide temperature");
    }
    let c = (f-32)*(5/9);
    return c;
}

function Fahrenheit_to_Kelvin(f){

    if(!f){
        console.log("please provide temperature");
    }
    let k=((f-32)*(5/9))+273.15;
    return k;
}

function Fahrenheit_to_Rankine(f){
    if(!f){
        console.log("please provide temperature");
    }
    let r=f+459.67;
    return r;
}

function Fahrenheit_info(){
    console.log("---> https://en.wikipedia.org/wiki/Fahrenheit#History")
}

module.exports={Fahrenheit_info,Fahrenheit_to_Celsius,Fahrenheit_to_Kelvin,Fahrenheit_to_Rankine}