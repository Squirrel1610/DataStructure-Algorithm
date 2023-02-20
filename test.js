function maxSubarraySum(arr, n) {
    if(arr.length < n) return null;

    let max_sum = 0;
    for(var i = 0 ; i < n; i++) {
        max_sum += arr[i];
    }

    let temp_sum = max_sum;
    for(var i = n; i < arr.length - n + 1; i++) {
        temp_sum = temp_sum - arr[i - n] + arr[i];
        max_sum = Math.max(max_sum, temp_sum);
    }

    return max_sum;
}


console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))