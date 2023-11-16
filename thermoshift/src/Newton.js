

function Newton_to_Celsius(n){
    if(!n){
        console.log("please provide temperature");
    }
    let c = n*(100/33);
    return c;
}

function Newton_info(){
    console.log('---> https://en.wikipedia.org/wiki/Newton_scale')
}

module.exports={Newton_info,Newton_to_Celsius};