#!/usr/bin/env node
const disk=require('disk-cleanup');
let option=process.argv[2];
let path=process.argv[3];
let size=process.argv[4];
let dirpath=process.argv[5];

if(option=="temp"){
disk.removeTemporary(path,(err,out)=>{
    if(err){
        console.log("An error occured" + err);
    }
    else{
        console.log(out);
    }
})
}
else if(option=="greater"){
    disk.filterGreater(path,size,(err,out)=>{
        if(err){
            console.log("An error occured "+ err);
        }
        else{
            console.log(out);
        }
    })
}
else if(option=="smaller"){
    disk.filterSmaller(path,size,(err,out)=>{
        if(err){
            console.log("An error occured "+ err);
        }
        else{
            console.log(out);
        }
    })
}
else if(option=="equal"){
    disk.filterEqual(path,size,(err,out)=>{
        if(err){
            console.log("An error occured "+ err);
        }
        else{
            console.log(out);
        }
    })

}
else if(option=="createbackupdir"){
  disk.createBackupDirectory(path);
    
}
else if(option=="backupfile"){
    disk.backupFile(path,size);
}
else if(option=="restorebackup"){
    disk.restoreBackup(path,size,dirpath);
}
else if(option=="removebackupfile"){
    disk.removeBackupFile(path,size);

}
else if(option=="removebackupdir"){
    disk.removeBackupdir(path)
}
else if (option === "--help") {
    console.log("\x1b[36mDisk Cleanup CLI Help:\x1b[0m");
    console.log("\x1b[36m-----------------------\x1b[0m");
    console.log("\x1b[33mAvailable commands:\x1b[0m");

    console.log("\x1b[32mtemp\x1b[0m \x1b[37m<directoryPath> -\x1b[0m Remove temporary files from the specified directory.");
    console.log("\x1b[32mgreater\x1b[0m \x1b[37m<directoryPath> <size> -\x1b[0m Delete files greater than the specified size from the directory.");
    console.log("\x1b[32msmaller\x1b[0m \x1b[37m<directoryPath> <size> -\x1b[0m Delete files smaller than the specified size from the directory.");
    console.log("\x1b[32mequal\x1b[0m \x1b[37m<directoryPath> <size> -\x1b[0m Delete files equal to the specified size from the directory.");
    console.log("\x1b[32mcreatebackupdir\x1b[0m \x1b[37m<directoryPath> -\x1b[0m Create a backup directory inside the specified directory.");
    console.log("\x1b[32mbackupfile\x1b[0m \x1b[37m<filePath> <backupDirectoryPath> -\x1b[0m Backup a file to the specified backup directory.");
    console.log("\x1b[32mrestorebackup\x1b[0m \x1b[37m<fileName> <backupDirectoryPath> <restoreDirectoryPath> -\x1b[0m Restore a backup file to the specified directory.");
    console.log("\x1b[32mremovebackupfile\x1b[0m \x1b[37m<fileName> <backupDirectoryPath> -\x1b[0m Remove a specific file from the backup directory.");
    console.log("\x1b[32mremovebackupdir\x1b[0m \x1b[37m<backupDirectoryPath> -\x1b[0m Remove the backup directory.");
}
