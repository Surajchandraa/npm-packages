




function wpm(originalString, typedString, timeTaken,callback) {
  const originalWords = originalString.split(' ');
  const typedWords = typedString.split(' ');

  const correctWords = originalWords.filter((word, index) => word === typedWords[index]);
  const accuracy = (correctWords.length / originalWords.length) * 100;

  const wordsPerMinute = Math.round((typedWords.length / timeTaken) * 60);
  


callback(null,{accuracy,wordsPerMinute})
  
}

module.exports=wpm;


