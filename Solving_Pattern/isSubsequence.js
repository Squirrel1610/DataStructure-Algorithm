// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

//Solution: O(n)
//Pattern: Multiple Pointers
function isSubsequence1(s1, s2) {
    if(s1.length == 0 ) return true;
    var j = 0;
    for(var i = 0 ; i < s2.length ; i++) {
        if(s2[i] == s1[j]) j++;
    }
    
    return j == s1.length;
}

//Solution: O(n)
//Recursion
function isSubsequence2(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence2(str1.slice(1), str2.slice(1))  
    return isSubsequence2(str1, str2.slice(1))
}

console.log(isSubsequence1('hello', 'hello world')); // true
console.log(isSubsequence1('sing', 'sting')); // true
console.log(isSubsequence2('abc', 'abracadabra')); // true
console.log(isSubsequence2('abc', 'acb')); // false (order matters)