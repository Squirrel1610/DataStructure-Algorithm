//O(n^2)
//Best: O(n^2)
//Worst: O(n^2)

function selectionSort(arr) {
    var minIndex;
    for(var i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[minIndex]) minIndex = j;
        }

        if(minIndex != i){
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        
    }
    return arr;
}

const arr = [5,3,4,1,2];
console.log(selectionSort(arr));
