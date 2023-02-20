//Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//Solution 1: O(n)
//Pattern: Frequency Counter
function validAnagram1(s1, s2){
    if(s1.length !== s2.length) return false;
    let counter1 = {}, counter2 = {};

    for(var val of s1){
        counter1[val] = (counter1[val] || 0) + 1;
    }

    for(var val of s2){
        counter2[val] = (counter2[val] || 0) + 1;
    }

    for(var key in counter1){
        if(!key in counter2) return false;
        if(counter1[key] !== counter2[key]) return false;
    
    }

    return true;
}

//Solution 2: O(n)
//Pattern: Frequency Counter
function validAnagram2(first, second) {
   if(first.length !== second.length) return false;

   var lookup = {};

   for(var val of first){
        lookup[val] ? ++lookup[val] : lookup[val] = 1
   }

   for(var val of second){
        if(!lookup[val]){
            return false;
        }else{
            --lookup[val];
        }
   }

   return true
}

console.log(validAnagram1('', '')) // true
console.log(validAnagram1('aaz', 'zza')) // false
console.log(validAnagram1('anagram', 'nagaram')) // true
console.log(validAnagram1("rat","car"))  // false
console.log(validAnagram1('awesome', 'awesom')) // false
console.log(validAnagram1('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram1('qwerty', 'qeywrt')) // true
console.log(validAnagram1('texttwisttime', 'timetwisttext')) // true
console.log("//////////////////////////////////////////////")
console.log(validAnagram2('', '')) // true
console.log(validAnagram2('aaz', 'zza')) // false
console.log(validAnagram2('', '')) // true
console.log(validAnagram2('anagram', 'nagaram')) // true
console.log(validAnagram2("rat","car"))  // false
console.log(validAnagram2('awesome', 'awesom')) // false
console.log(validAnagram2('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
console.log(validAnagram2('qwerty', 'qeywrt')) // true
console.log(validAnagram2('texttwisttime', 'timetwisttext')) // true