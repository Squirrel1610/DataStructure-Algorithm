// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//Solution 1: O(n)
//Pattern: Multiple Pointers
function countUniqueValues1(sortedArr){
    if(sortedArr.length === 0) return 0;
    let p1 = 0, p2 = p1 + 1;
    let count = 1;
    while(p2 <= sortedArr.length-1){
        if(sortedArr[p1] === sortedArr[p2]){
            ++p2;
        }else{
            ++count;
            p1 = p2;
            ++p2
        }
    }
    return count;
}

//Solution 2: O(n)
//Pattern: Multiple Pointers
function countUniqueValues2(sortedArr) {
    if(sortedArr.length == 0 ) return 0;
    var i = 0;
    for( var j = 1; j < sortedArr.length; j++){
        if(sortedArr[j] != sortedArr[i]){
            i++;
            sortedArr[i] = sortedArr[j];
        }
    }

    return i + 1;
}

console.log(countUniqueValues1([1,1,1,1,1,2])) // 2
console.log(countUniqueValues1([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues1([])) // 0
console.log(countUniqueValues1([-2,-1,-1,0,1])) // 4
console.log("////////////////////////////////////");
console.log(countUniqueValues2([1,1,1,1,1,2])) // 2
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues2([])) // 0
console.log(countUniqueValues2([-2,-1,-1,0,1])) // 4