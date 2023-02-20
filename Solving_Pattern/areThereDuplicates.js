// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

//Solution 1: O(n)
//Pattern: Frequency Counter
function areThereDuplicates1(...args) {
    var collection = {};
    for(var val of args){
        collection[val] ? collection[val]++ : collection[val] = 1;
    }

    for(var key in collection) {
        if(collection[key] > 1) return true;
    }
    return false;
}

//Solution 2: O(n)
//Pattern: Multiple Pointer
function areThereDuplicates2(...args) {
    var arr = args.sort();
    var i = 0;
    for(var j = 1 ; j < arr.length ; j++){
        if(arr[i] != arr[j]){
            i++;
        }else{
            return true
        }
    }
    return false;
}

//Solution 3: 
//Using Set
function areThereDuplicates3(...args){
    return new Set(args).size !== args.length;
}

console.log(areThereDuplicates3(1, 2, 3)) // false
console.log(areThereDuplicates3(1, 2, 2)) // true 
console.log(areThereDuplicates3('a', 'b', 'c', 'a')) // true 