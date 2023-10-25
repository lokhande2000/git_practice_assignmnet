function chckPrime(num){
    for(let i=1; i<=num; i++){
        if(num % i == 0){
            console.log("Prime Number");
        }else{
            console.log("Not a Prime Number");
        }
    }
}

chckPrime(2);