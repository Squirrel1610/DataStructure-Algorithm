//mimic the functionality of Math.pow()

//Solution: recursion
function power(base, exp){
    if(exp === 0) return 1;
    
    return base * power(base, exp - 1);
}

console.log(power(2,4))