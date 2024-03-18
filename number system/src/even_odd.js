function CheckEven(number){
    if((number%2)==0){
        return true;
    }
    else{
        return false;
    }
}

function nEven(number){
    let count=0;
    let n=1;
    let num=[];
    while(count<number){
        if(CheckEven(n)){
            num.push(n);
            count++;
            
        }
            n++;
        
    }
    return num;
}


function CheckOdd(number){
    if((number%2)!=0){
        return true;
    }
    else{
        return false;
    }
}

function nOdd(number){
    let num=[];
    let n=1;
    let count=0;
    while(count<number){
        if(CheckOdd(n)){
            count++;
            num.push(n);

        }
        n++;
    }
    return num;
}

console.log(nOdd(20))
module.exports={CheckEven,CheckOdd,nEven,nOdd};