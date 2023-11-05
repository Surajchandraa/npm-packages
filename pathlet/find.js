// final.js
const path = require('path');
const fs = require('fs');
const subdirectory = require('./subdirectory')

const currentDirectory = process.cwd();

let found = false;
function get_file_location(file_name_with_ext, callback) {
    fs.readdir(currentDirectory, (err, files) => {
        if (err) {
            callback("Unable to load files of this directory", null);
            return;
        }


        files.forEach(file => {
            let filepath = path.join(currentDirectory, file);

            fs.stat(filepath, (err, stats) => {
                if (err) {
                    callback("Can't get file info", null);
                    return;
                }

                if (!stats.isDirectory() && file === file_name_with_ext && !found) {
                    let output = path.join(currentDirectory, file);
                    found=true;
                    callback(null, output);
                } else if (stats.isDirectory()) {
                    subdirectory(filepath, file_name_with_ext, callback);
                }

                
            });
        });
      
        
    });
}


module.exports=get_file_location;


