//Given an array of words, return a new array containing each word capitalized.

//Solution
function capitalizeWords (words) {
    let capitalizedWords = [];

    if(words.length === 0) return capitalizedWords;

    capitalizedWords.push(words[0].toUpperCase());

    capitalizedWords = capitalizedWords.concat(capitalizeWords(words.slice(1)));

    return capitalizedWords;
}
  
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words));; // ['I', 'AM', 'LEARNING', 'RECURSION']