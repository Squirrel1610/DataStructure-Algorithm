//Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to the callback.
//Otherwise it returns false.

//Solution: Recursion

function someRecursive(arr, cb){
    if(arr.length === 0) return false;
    if(cb(arr[0]) === true) return true;
    return someRecursive(arr.slice(1), cb);
}

console.log(someRecursive([4,6,8], val => val > 10));