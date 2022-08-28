//đếm số lần xuất hiện của các kí tự trong 1 chuỗi

function charCount(str){
    let result = {};

    for(let i = 0; i < str.length ; i++){
        var char = str[i].toLowerCase();
        
        if(isAlphaNumeric(char)){
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

function isAlphaNumeric(char){
    var code = char.charCodeAt(0);

    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        
        return false;
    }
    return true;
}

var result = charCount("Hello world!");
console.log(result);