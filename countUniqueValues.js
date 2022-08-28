//Example: Count unique values in an sorted array

//My solution
function countUniqueValues(arr){
    let count = arr.length ? 1 : 0;

    let current = 0 ;
    let next = current + 1;

    while(next <= arr.length -1){

        // console.log(`current: ${current}, next: ${next}`);
        // console.log(`arr[${current}]: ${arr[current]}, arr[${next}]: ${arr[next]}`)
        

        if(arr[current] !== arr[next]){
            count++;
        }

        // console.log(`count: ${count}`);
        // console.log("\n");
        current++;
        next++;
        
    }

    return count;
}

//Guide solution
function countUniqueValues2(arr){
    if(arr.length === 0 ) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] < arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i + 1;
}

console.log(countUniqueValues2([1, 1 ,1 , 1, 2]))