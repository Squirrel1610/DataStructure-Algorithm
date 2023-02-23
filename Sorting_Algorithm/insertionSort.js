//O(n^2)
//Best: O(n)
//Worst: O(n^2)

function insertionSort(arr) {
    for(var i = 1; i < arr.length ; i++) {
        var currentVal = arr[i];
        let j = i-1; 
        while ((j >= 0) && (currentVal < arr[j])) {
            arr[j+1] = arr[j];
            j--;
        }
        console.log(j);
        arr[j+1] = currentVal;
    }
    return arr;
}

const arr = [5,3,4,1,2];
console.log(insertionSort(arr));