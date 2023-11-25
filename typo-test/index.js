const readline=require('readline');
const randomstring=require('./src/randomstring');
const wpm = require('./src/words');

function calculatespeed(originalString,callback){
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const startTime = Date.now();
rl.question(`Type this: "${originalString}"\n`, (typedString) => {
  


  const timeTaken = (Date.now() - startTime) / 1000; 

  wpm(originalString, typedString, timeTaken,callback);
  rl.close();
});
}



module.exports={calculatespeed,randomstring};