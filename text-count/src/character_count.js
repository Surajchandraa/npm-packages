function charCount(str_text){
    let count = 0;

    for(let i=0;i<str_text.length;i++){
        count++;
    }

    return count;
}


function wordCount(str_text){
    let words = str_text.match(/\b\w+\b/g);
  
    return words ? words.length : 0;
    
}

function senCount(text) {
    let matches = text.match(/[.!?]+(\s|$)/g);
  
   
    return matches ? matches.length : 0;
  }



  function lineCount(text) {
   
    let lines = text.split(/\r\n|\r|\n/);

  
    lines = lines.filter(line => line.trim() !== '');

    return lines.length;
}



function mostCommonwords(text,num=5){
    let words = text.match(/\b\w+\b/g);
    let wordcount={};
   

    words.forEach(element => {
        wordcount[element]=(wordcount[element] || 0) +1
    });
    let sortedWords = Object.keys(wordcount).sort((a, b) => wordcount[b] - wordcount[a]);
    let top_words=sortedWords.slice(0,num);

    let num_words={};
    top_words.forEach(el=>{
        num_words[el]=wordcount[el];
    })

    return num_words;
}



function mostCommonChar(text,num=5){
    
    let characters = text.match(/[^ ,.]/g);
    let charcount={};
    characters.forEach(element=>{
        charcount[element]=(charcount[element] || 0)+1;
    })
    let sortedchar=Object.keys(charcount).sort((a,b)=>charcount[b]-charcount[a]);
    let top_char=sortedchar.slice(0,num);

    let num_char={};
    top_char.forEach(el=>{
        num_char[el]=charcount[el];
    })

    return num_char;
    
}

module.exports={charCount,wordCount,mostCommonChar,mostCommonwords,lineCount,senCount}


  
