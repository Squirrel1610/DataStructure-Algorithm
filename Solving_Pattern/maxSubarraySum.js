//Write a function maxSubArraySum with input is an array of integers and a number. The function return the max sum of n consecutive elements in array

//Solution 1: O(n^2)
function maxSubarraySum1(arr, n) {
    if(arr.length == 0) return null;
    
    let max = -Infinity;
    for(var i = 0 ; i < arr.length - n + 1; i++) {
        let temp = 0;
        // for(var j = 0; j < num; j++){
        //     temp += arr[i+j];
        // }
        for(var j = i; j < i + n; j++) {
            temp += arr[j];
        }

        if(temp > max) max = temp;
    }
    return max;
}

//Solution 2: O(n)
//Pattern: Sliding Window
function maxSubarraySum2(arr, n) {
    if(arr.length == 0 ) return null;

    var max_sum = 0;
    for(var i = 0 ; i < n; i++) {
        max_sum += arr[i];    
    }

    var temp_sum = max_sum;
    for(var i = n; i < arr.length ; i++) {
        temp_sum = temp_sum - arr[i - n] + arr[i];
        max_sum = Math.max(temp_sum, max_sum);
    }

    return max_sum;
}

console.log(maxSubarraySum2([1,2,5,2,8,1,5], 2))