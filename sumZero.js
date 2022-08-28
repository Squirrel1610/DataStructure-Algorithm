//Example

//Write a function called sumZero which accepts a sorted array of integers.
//The function should find the first pair where the sum is 0.
//Return an array that includes both value that sum to zero or undefined if a pair does not exist


//Solution 1: 
//Time: O(n^2)
//Space: O(1)
function sumZero1(arr){
    for(let i = 0 ; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}

//Solution 2: 
//Time: O(n)
//Space: O(1)

function sumZero2(arr){
    let left = 0;
    let right = arr.length -1 ;
    
    while(left < right){
        var sum = arr[left] + arr[right]
        if(sum === 0){
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }

    return undefined;
}

console.log(sumZero2([-3, -2, -1, 0, 1, 4, 5]))