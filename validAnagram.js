//Solution 1: O(n)
function validAnagram1(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let char of str1){
        frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
    }

    for(let char of str2){
        frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
    }

    for(let key in frequencyCounter1){
        if(frequencyCounter1[key] !== frequencyCounter2[key]){
            return false;
        }
    }
    return true;
}

//Solution2: O(n)
function validAnagram2(first, second){
    if(first.length !== second.length){
        return false;
    }

    const lookup = {};

    for(let letter of first){
        lookup[letter] ? ++lookup[letter] : lookup[letter] = 1; 
    }
    
    for(let letter of second){
        if(!lookup[letter]){
            return false;
        }else{
            --lookup[letter];
        }
    }

    return true;
}


console.log(validAnagram2('texttwisttime', 'timetwisttext')); 