let inp=process.argv[2];
let inp2=process.argv[3];
let inp3=process.argv[4];

const media=require('mediaconv');
if(inp=='convert'){
    if(!inp2 && !inp3){
        console.log("please provide video source and output file name");
    }
    else{
        media.convert(inp2,inp3);
    }
}
else if(inp=='play'){
    if(!inp2){
        console.log("please enter filename");

    }
    else{
        media.play(inp2);
    }
}
else if(inp=="--help){
  console.log("commands available--->);
  console.log("conv convert <video file> <audio file>);
 console.log("conv play <audio or video file path);
else{
    console.log("invalid command")
}

