//O(n)
//Best case: O(1)
//Worst case: O(n)
function linearSearch(arr, num) {
    for(var i = 0; i < arr.length ; i++) {
        if(arr[i] == num) return i;
    }
    return -1;
}

console.log(linearSearch([10, 15, 20, 25, 30], 15)) // 1
console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)) // 5
console.log(linearSearch([100], 100)) // 0
console.log(linearSearch([1,2,3,4,5], 6)) // -1