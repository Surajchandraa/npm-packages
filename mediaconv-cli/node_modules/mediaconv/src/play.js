const { exec } = require('child_process');
const { error } = require('console');
const { stdout, stdin } = require('process');


function play(audio_input) {
  exec(`ffplay ${audio_input}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`Audio playback started for ${audio_input}`);
  });
}


module.exports=play;