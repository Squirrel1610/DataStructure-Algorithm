// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

//Solution: O(n)
//Pattern: Sliding Window
function minSubArrayLen(arr, target) {
    let sum = 0, start = 0, end = 0, minLen = Infinity;
    
    while(start < arr.length) {
        if(sum < target && end < arr.length){
            sum += arr[end];
            end++;
        }else if(sum >= target){
            minLen = Math.min(minLen, end - start);
            sum -= arr[start];
            start++;
        }else{
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}


console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))// 0