//O(n^2)
//Best: O(n)
//Worst: O(n^2)

//add variable noSwap to optimize
function bubbleSort(arr) {
    var noSwap;
    for(var i = 0 ; i < arr.length ; i++){
        noSwap = true;
        // Last i elements are already in place 
        for(var j = 0; j < arr.length - 1 - i; j++){
            if(arr[j] > arr[j+1]){
                //swap
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                noSwap = false;
            }
        }
        if(noSwap) break;
    }
    return arr;
}

const arr = [4,2,3,9,5,7,1];
console.log(bubbleSort(arr));
