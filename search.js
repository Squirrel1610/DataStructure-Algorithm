//Example: Search a the position of a value in a sorted array

//Solution 1: O(n)

//linear search
function search(arr, val){
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === val) return i;
    }
    
    return -1;
}

//Solution 2: O(log(n))

//Binary search
function search2(arr, val){
    let min = 0;
    let max = arr.length -1;

    while(min <= max){
        let middle = Math.floor(min + max)/2;

        if(arr[middle] < val){
            min = middle +1;
        }else if(arr[middle] > val){
            max = middle -1;
        }else{
            return middle;
        }
    }   

    return -1;
}

console.log(search([1,2,3,4,5,6,7,8,9,10], 3));