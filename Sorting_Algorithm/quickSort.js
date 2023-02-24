// O(n log n)
//Best: O(n log n)
//Worst: O(n^2)

function pivot(arr, start = 0, end = arr.length -1) {
    let pivot_val = arr[start];
    let pivot_idx = start;
    for(var i = start + 1; i <= end; i++){
        if(pivot_val > arr[i]){
            pivot_idx++;
            //swap
            [arr[pivot_idx], arr[i]] = [arr[i], arr[pivot_idx]];
        }
    }
    //swap
    [arr[start], arr[pivot_idx]] = [arr[pivot_idx], arr[start]];
    return pivot_idx;
}

function quickSort(arr, left = 0, right = arr.length -1) {
    if(left < right) {
        let pivotIdx = pivot(arr, left, right);
        //left
        quickSort(arr, left, pivotIdx -1);
        //right
        quickSort(arr, pivotIdx + 1, right);
    }
    return arr;
}

let arr = [4,8,2,1,5,7,6,3];
console.log(quickSort(arr));