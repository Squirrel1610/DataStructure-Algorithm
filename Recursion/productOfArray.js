//Return the product of all element in array

//Solution: Recursion

function productOfArray(arr){
    if(arr.length === 0) return 1;

    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([]))