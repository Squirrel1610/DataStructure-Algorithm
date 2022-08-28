//Sum of all the numbers from to 0 to the number passed to the function

//Solution: Recursion

function recursiveRange(num){
    if(num === 0) return 0;

    return num + recursiveRange(num - 1);
}

console.log(recursiveRange(6));