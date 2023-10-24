const morse_text=require('./src/morse_text');
const morse_code=require('./src/morse_code')
function morse_to_text(data){
    let finaldata=[];
    let data2=data.replace(/\s/g,',');
    arraystrigng=data2.split(",")
    

    for(let i=0;i<arraystrigng.length;i++){
        let key = arraystrigng[i];
        let insertingdata=morse_text[key]

        if(insertingdata!=undefined){
            finaldata.push(insertingdata);
        }
        else{
            console.log(`${key} is a invalid morsecode`)
        }
    }

    return finaldata.join('');
}

function text_to_morse(data){
    let finaldata=[];
    let data2=data.split('');
    for(let i=0;i<data2.length;i++){
        let key=data2[i];
        let insertingdata=morse_code[key];

        if(insertingdata!=undefined){
            finaldata.push(insertingdata);
        }
        else{
            console.log(` morsecode not found for ${key} `)
        }
    }
    return finaldata.join(' ');
}

module.exports={
    morse_to_text,
    text_to_morse
}