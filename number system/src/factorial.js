function factorial(number){
    let fact=1;
    if(number==0){
        return 1;
    }
    for(let i=1;i<number;i++){
        fact*=i;
    }
    console.log(fact);
}

module.exports=factorial;