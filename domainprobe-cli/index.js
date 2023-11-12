#!/usr/bin/env node
const domainprobe=require('domainprobe');

let select_functionality = process.argv[2];
let input = process.argv[3];
let input2=process.argv[4];
if(select_functionality==='ip'){
    domainprobe.get_ip(input,(err,data)=>{
        console.table(data);
    })
}
else if(select_functionality==='hostname'){
    domainprobe.get_hostname(input,(err,data)=>{
        console.table(data)
    })
}
else if(select_functionality==='domain-info'){
    domainprobe.data_extract(input,(err,data)=>{
        console.table(data)
    })
}
else if(select_functionality==='ip-info'){
    domainprobe.data_extract_ip(input,(err,data)=>{
        console.table(data)
    })
}
else if(select_functionality==='location'){
    domainprobe.exact_location(input,input2,(err,data)=>{
        console.table(data)
    })
}
else{
    console.log('invalid operation')
}