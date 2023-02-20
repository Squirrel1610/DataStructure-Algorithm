//Function called "same", input two arrays.
//Function return true if every in the array has it's corresponding value squared in the second array.

//Solution 1: O(n^2)
function same1(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    for(var i = 0; i < arr1.length; i++){
        let index = arr2.indexOf(Math.pow(arr1[i], 2));
        if(index === -1) return false;
        arr2.splice(index, 1);
    }
    return true;
}


//Solution 2: O(n)
//Pattern: Frequency Counter
function same2(arr1, arr2){
    if(arr1.length !== arr2.length) return false;

    let counter1 = {}, counter2 = {};

    for(var val of arr1){
        counter1[val] = (counter1[val] || 0) + 1;
    }

    for(var val of arr2){
        counter2[val] = (counter2[val] || 0) + 1;
    }

    for(var key in counter1){
        if(!(key**2) in counter2) return false;
        if(counter1[key] !== counter2[key**2]) return false;
    }
    return true;
}

//same
console.log(same1([1,2,2,], [4,4,1]))
console.log(same1([1,2,2,3], [4,4,1]))
console.log(same1([4,2,3], [16,4,1]));

//same2
console.log(same2([4,2,2,2], [16,4,4,4]));

