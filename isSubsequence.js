//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. 
//In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

//Examples:
// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

//Solution 1: Multiple points
function isSubsequence(str1, str2){
    if(str1.length === 0 ) return true;

    let i = 0;
    let j = 0; 
    
    while(j < str2.length){
        if(str2[j] === str1[i]){
            i++;
        }
        j++;
    }

    return i === str1.length;
}

//Solution 2: Recursive (đệ quy)
function isSubsequence2(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
}

console.log(isSubsequence('abc', 'abracadabra'))