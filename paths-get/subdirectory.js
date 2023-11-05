// subdirectory.js
const path = require('path');
const fs = require('fs');


function find_in_sub(dir_path, file_name_with_ext, callback) {
    
    fs.readdir(dir_path, (error, files) => {
        if (error) {
            callback("unable to open subdirectory", null);
            return;
        }

        let output = '';
        let found = false; 
        

        files.forEach(file => {
            let subpaths = path.join(dir_path, file);
            fs.stat(subpaths, (err, stats) => {
                if (err) {
                    callback("can't get file info in subdirectory", null);
                    return;
                }

                if (!stats.isDirectory() && file === file_name_with_ext && !found) {
                    found=true;
                    callback(null, subpaths);
                } else if (stats.isDirectory()) {
                    find_in_sub(subpaths, file_name_with_ext, callback);
                }

                
            })
        })
        

        
    })
}

module.exports = find_in_sub;
