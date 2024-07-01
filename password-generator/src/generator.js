function generate(length = 8, numbers = false, special_char = false, capitals = false) {
    let finalpassword="";
    const smallChars = 'abcdefghijklmnopqrstuvwxyz';
    const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const numberChars = '0123456789';
    const capitalChars = smallChars.toUpperCase();

    let pass=smallChars;

    if(numbers){
        pass+=numberChars;
    }

    if(special_char){
        pass+=specialChars;
    }

    if(capitals){
        pass+=capitalChars;
    }

    for(let i=0;i<length;i++){
        let randomindex=Math.round(Math.random()*pass.length);
        finalpassword+=pass[randomindex];
    }

    return finalpassword;

}

function multiplepasswords(numberofpass=5,length, numbers, special_char, capitals){
    let arrayofpass=[];
    for(let i=0;i<numberofpass;i++){
        arrayofpass.push(generate(length,numbers,special_char,capitals));
    }

    return arrayofpass;
}

module.exports={generate,multiplepasswords};