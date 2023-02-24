//O(n log n)
//Best: O(n log n)
//Worst: O(n log n)

function merge(arr1, arr2) {
    var result = [];
    var i = 0, j = 0;
    while(i < arr1.length && j < arr2.length) {
        if(arr1[i] <= arr2[j]){
            result.push(arr1[i]);
            i++
        }else{
            result.push(arr2[j]);
            j++;
        }
    }
    
    //push the remain in result
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        result.push(arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    var mid = Math.ceil(arr.length/2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

//Result 
console.log(mergeSort([10,24,76,73,21,1,9]))

// // Description example
// console.log(mergeSort[10,1,50,4]);

// left = mergeSort([10,1]);
// left = mergeSort[10] => [10]
// right = mergeSort[1] => [1]
// return merge([10], [1]) => [1, 10]

// right = mergeSort([50,4]);
// left = mergeSort[50] => [50]
// right = mergeSort[4] => [4]
// return merge([50], [4]) => [4, 50]

// return merge([1, 10], [4, 50]) => [1,4,10,50]
