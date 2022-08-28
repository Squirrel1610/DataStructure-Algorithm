//Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
//Otherwise, return -1.

//Solution: O(log(n))

function binarySearch(sortedArr, target){
    let start = 0;
    let end = sortedArr.length -1 ;

    while(start <= end){
        let mid = Math.floor((start + end)/2);

        if(sortedArr[mid] > target){
            end = mid -1;
        }else if(sortedArr[mid] < target){
            start = mid + 1;
        }else{
            return mid;
        }
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5],2));
