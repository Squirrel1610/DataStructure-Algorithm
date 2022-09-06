function bubbleSort(arr){
    //check if swap => continue; else => break
    let noSwaps;
    for(let i = arr.length ; i > 0 ; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1 ; j++){
            console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                noSwaps = false;
            }
        }
        console.log("one round pass");
        if(noSwaps) break;
    }

    return arr;
}

bubbleSort([1,3,2,5]);