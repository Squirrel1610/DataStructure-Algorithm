//Example: Find out the two numbers have the same frequency of digits

//My solution: Frequency Counter (O(n))

function sameFrequency(num1, num2){
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for(let digit of num1.toString()){
        frequencyCounter1[digit] = (frequencyCounter1[digit] || 0) + 1;
    }

    for(let digit of num2.toString()){
        frequencyCounter2[digit] = (frequencyCounter2[digit] || 0) + 1;
    }

    for(let key in frequencyCounter1){
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(34,14));