//Example:

//Write a function called maxSubarraySum with input an array and a number called n
//The function calculates the maximum sum of n elements consecutive (liên tiếp) in the array

//Solution 1: Time: O(n^2)
function maxSubarraySum(arr, n){
    if(n > arr.length){
        return null;
    }

    let max = -Infinity;
    for(let i = 0; i < arr.length - n + 1; i++){
        var max_sub = 0;
        for(let j = 0 ; j < n ; j++){
            max_sub += arr[i + j];
        }

        if(max < max_sub){
            max = max_sub;
        }
    }

    return max;
}

//Solution 2: O(n)
function maxSubarraySum2(arr, num){
    if(num > arr.length){
        return null;
    }

    let max_sum = 0;
    let temp_sum = 0;

    //sum of the first num elements in array
    for(let i = 0 ; i < num; i++){
        max_sum += arr[i];
    }

    temp_sum = max_sum;

    for(let i = num ; i < arr.length ; i++){
        temp_sum = temp_sum - arr[i - num] + arr[i];
        max_sum = Math.max(max_sum, temp_sum);
    }

    return max_sum;
}

console.log(maxSubarraySum2([100,200,300,400], 2));



