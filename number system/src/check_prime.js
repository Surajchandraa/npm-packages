// function to check if number is prime  or not
function isPrime(number) {
    if (number < 2) {
        return false;
    }
    

    
    const sqrtNum = Math.sqrt(number);
    for (let i = 2; i <= sqrtNum; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// print first n prime number
function nPrime(number){
    let count=0;
    let num=2;
    let primes=[];

    while(count<number){
        if(isPrime(num)){
            primes.push(num);
            count++;
        }
        num++;
    }
    return primes;


}

//function to check composite number or not
function isComposite(number){
    if(isPrime(number)){
        return false;
    }
    else{
        return true;
    }
}

//print n composite number
function nComposite(number){
    let count=0;
    let num=4;
    let composite_arr=[];
    while(count<number){
        if(isComposite(num)){
            composite_arr.push(num)
            count++;
        }
        num++;
    }
    return composite_arr;
}

//check divisibility of a number by another number
function checkDivisibility(number,number2){
    if((number%number2)===0){
        return true;
    }
    return false;
}


module.exports={checkDivisibility,nComposite,nPrime,isPrime,isComposite};