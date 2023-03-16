//Recursive (O(n^2))
function fib(n) {
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//Recursive + Memorize (top -> down) (O(n))
function fib2(n, memo = []){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    var result = fib2(n-1, memo) + fib2(n-2, memo);
    memo[n] = result;
    return result;
}

//Recursive + Tabulated (down -> top) (O(n) but less space complexity)
function fib3(n) {
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }

    return fibNums[n];
}

console.log(fib3(5));