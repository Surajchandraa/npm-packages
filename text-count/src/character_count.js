function char_count(str_text){
    let count = 0;

    for(let i=0;i<str_text.length;i++){
        count++;
    }

    return count;
}


function word_count(str_text){
    let words = str_text.match(/\b\w+\b/g);
  
    return words ? words.length : 0;
    
}

function sen_count(text) {
    let matches = text.match(/[.!?]+(\s|$)/g);
  
   
    return matches ? matches.length : 0;
  }



  function line_count(text) {
   
    let lines = text.split(/\r\n|\r|\n/);

  
    lines = lines.filter(line => line.trim() !== '');

    return lines.length;
}

module.exports = { char_count, word_count, sen_count, line_count };



  
