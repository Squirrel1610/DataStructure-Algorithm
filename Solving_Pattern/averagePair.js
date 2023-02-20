// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

//Solution: O(n)
//Pattern: Multiple Pointers
function averagePair(arr, target) {
    if(arr.length == 0) return false;
    var left = 0, right = arr.length - 1;
    while(left < right){
        let result = (arr[left] + arr[right])/2;
        if(result == target){
            return true;
        }else if(result < target){
            left++;
        }else{
            right--;
        }
    }
    return false;
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false