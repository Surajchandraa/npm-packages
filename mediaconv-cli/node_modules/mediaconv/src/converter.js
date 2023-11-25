const { exec } = require('child_process');
const { error } = require('console');
const { stdout, stdin } = require('process');

function convert(video_inp, out) {
    exec(`ffmpeg -i ${video_inp} -vn -ar 44100 -ac 2 -b:a 192k ${out}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`Audio converted successfully to ${out}`);
      
    });
  }
  

  module.exports=convert;