//function called "sumZero" with input is a sorted array of integers. Return the first pair where the sum is 0 or undefined if a pair does not exist

//Solution 1: O(n^2)
function sumZero1(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


//Solution 2: O(n)
//Pattern: Multiple Pointers
function sumZero2(arr){
    let left = 0, right = arr.length-1;

    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum === 0){
            return [arr[left], arr[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
}

console.log(sumZero1([-4,-3,-2,-1,0,1,2,5]));
console.log(sumZero1([-2,0,1,3]));
console.log("/////////////////////");

console.log(sumZero2([-4,-3,-2,-1,0,1,2,5]));
console.log(sumZero2([-2,0,1,3]));