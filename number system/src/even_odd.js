function CheckEven(number){
    if((number%2)==0){
        return true;
    }
    else{
        return false;
    }
}


function CheckOdd(number){
    if((number%2)!=0){
        return true;
    }
    else{
        return false;
    }
}

module.exports={CheckEven,CheckOdd};