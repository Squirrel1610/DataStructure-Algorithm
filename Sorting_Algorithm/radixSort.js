//O(n k)
//Best and Worst: O(n k)
//n : length of array
//k: number of digits

function getDigit(num, place) {

    // //Solution 1
    // num = num.toString();
    // num = (num.split("")).reverse();
    // for(var i = 0 ; i < num.length ; i++){
    //     if(i == place) {
    //         return num[place];
    //     }
    // }
    // return 0;


    // //Solution 2
    // let i = 0;
    // while(num > 0) {
    //     if(place == i) {
    //         return num % 10;
    //     }
    //     num = parseInt(num / 10);
    //     i++;
    // }
    // return 0;

    //Solution 3
    return Math.floor(Math.abs(num) / Math.pow(10, place) % 10);
}

// console.log(getDigit(12345,0));
// console.log(getDigit(12345,1));
// console.log(getDigit(12345,2));
// console.log(getDigit(12345,3));
// console.log(getDigit(12345,4));
// console.log(getDigit(12345,5));

function digitCount(num) {
    // //Solution 1
    // if(num === 0 ) return 1;
    // let count = 0;
    // while(num > 0){
    //     count++;
    //     num = parseInt(num/10);
    // }
    // return count;

    // //Solution 2
    // return (num.toString()).length;

    //Solution 3
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(125))

function mostDigits(arr) {
    let max = -Infinity;    
    arr.forEach((num) => {
        max = Math.max(digitCount(num), max);
    })
    return max == -Infinity ? 0 : max ;
}

// console.log(mostDigits([7,56,1234]));

function radixSort(nums) {
    let maxDigits = mostDigits(nums);

    for(var i = 0 ; i < maxDigits; i++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for(var j = 0; j < nums.length ; j++) {
            let digit = getDigit(nums[j], i);
            digitBuckets[digit].push(nums[j]);
        }

        nums = [].concat(...digitBuckets);
    }

    return nums;
}

console.log(radixSort([23,345,5467,12,2345,9852]));