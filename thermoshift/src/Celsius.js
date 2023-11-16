
function Celsius_to_Fahrenheit(temp_in_c){

    if(!temp_in_c){
        console.log("please give temperature value")
    }
    let in_F=((temp_in_c*9)/5)+32;
    return in_F;
}



function Celsius_to_Kelvin(temp_in_c){
    if(!temp_in_c){
        console.log("please provide temperature")
    }

    let k=temp_in_c+273.15
    return k;

    
}



function Celsius_to_Delisle(c){
    if(!c){
        console.log("please provide temperature");
    }
    let de = (100-c)*(3/2);
    return de;
}

function Celsius_to_Newton(c){

    if(!c){
        console.log("please provide temperature");
    }
    let n = c*(33/100);
    return n;
}

function Celsius_to_Reaumur(c){
    if(!c){
        console.log("please provide temperature");
    }
    let r = c*(5/4)
    return r;
}

function Celsius_info(){
        console.log('---> https://en.wikipedia.org/wiki/Celsius#History')
    
}

module.exports={Celsius_info,Celsius_to_Delisle,Celsius_to_Fahrenheit,Celsius_to_Kelvin,Celsius_to_Newton,Celsius_to_Reaumur};