//Return the nth number in the fibonacci sequence

function fib(position){
    if(position === 1 || position === 2) return 1;

    return fib(position - 2) + fib(position - 1);
}