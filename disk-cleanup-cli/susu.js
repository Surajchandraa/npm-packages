
function missingNumber(array,n){
    let arr=array.reduce((a,b)=>a+b,0);
    let sum=((n*(n+1))/2);
     return sum-arr
        
}

    let arr=[1,2,3,5]
console.log(missingNumber(arr,10))