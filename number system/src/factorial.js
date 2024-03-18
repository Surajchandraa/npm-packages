function Factorial(number){
    let fact=1;
    if(number==0){
        return fact;
    }
    for(let i=1;i<=number;i++){
        fact*=i;
    }
    return fact;
}

function nFactorial(arr){
    let count=0;
    let ret=[];
    while(count<arr.length){
        ret.push(Factorial(arr[count]));
        count++;
    }
    return ret;
}
let ar=[2,3,4,5,6]
console.log(nFactorial(ar))
module.exports={nFactorial,Factorial};