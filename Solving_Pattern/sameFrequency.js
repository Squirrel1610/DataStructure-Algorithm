// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

//Solution: O(n)
//Pattern: Frequency counter
function sameFrequency(n1, n2) {
    var t1 = n1.toString();
    var t2 = n2.toString();

    var c1 = {}, c2 = {};
    for(var val of t1){
        c1[val] ? c1[val]++ : c1[val] = 1;
    }

    for(var val of t2){
        c2[val] ? c2[val]++ : c2[val] = 1;
    }
    
    for(var key in c1) {
        if(!key in c2) return false;
        if(c2[key] != c1[key]) return false;
    }
    
    return true;
}

console.log(sameFrequency(182,281)) // true
console.log(sameFrequency(34,14)) // false
console.log(sameFrequency(3589578, 5879385)) // true