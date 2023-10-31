const fs = require('fs');
const path = require('path')

async function root_dir(){

    let data={
        1:"public",
        2:"src",
        3:"config",
        4:"tests"
    }

    let data2={
        1:"readme.md",
        2:".gitignore"
    }
    
    for(let element in data){
        let dir_path=path.join(__dirname,'..','..',data[element]);
        if(!fs.existsSync(dir_path)){
            fs.mkdirSync(data[element]);
            console.log(`${data[element]} created successfully`);
        }
        else{
            console.log(`${data[element]} directory already exists, skipping...`);
        }
    }

    for(let element in data2){
        let fs_path=path.join(__dirname,'..','..',data2[element])
        if(!fs.existsSync(fs_path)){
            fs.writeFileSync(data2[element],'');
            console.log(`${data2[element]} created successfully`);

        }
        else{
            console.log(`${data2[element]} files already exists, skipping... `)
        }
    }
}

async function public(){
let data2=['css','images','scripts'];
let public_path=path.join(__dirname,'..','..','public');

data2.forEach(file=>{
    let filePath = path.join(public_path, file);
        
    if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath);
        console.log(`${file} directory created successfully!`);
    } else {
        console.log(`${file} directory already exists, skipping...`);
    }
})
}


async function src(){
    let data=['controllers','middlewares','models','routes','services','views'];
    let src_path=path.join(__dirname,'..','..','src');
    data.forEach(file=>{
        let filePath = path.join(src_path, file);
        
        if (!fs.existsSync(filePath)) {
            fs.mkdirSync(filePath);
            console.log(`${file} directory created successfully!`);
        } else {
            console.log(`${file} directory already exists, skipping...`);
        }
    })
}

async function config(){
    let data=['database.js','environment.js'];
    let config_path=path.join(__dirname,'..','..','config');
    data.forEach(file=>{
        let filePath = path.join(config_path, file);

        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, '');
            console.log(`${file} created successfully!`);
        } else {
            console.log(`${file} already exists, skipping...`);
        }
    })
}

async function create(){
    let suraj=await root_dir();
    let joshi=await public();
    let sakshi = await src();
    let bhatt = await config();
}

module.exports=create;
