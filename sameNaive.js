//Solution 1 : O(n^2)
function same1(arr1, arr2){
    if(arr1. length !== arr2.length){
        return false;
    }

    for(let i = 0 ; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false;
        } 

        arr2.splice(correctIndex, 1)
    }

    return true;
}

//Solution 2: O(n)
function same2(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    console.log(frequencyCounter1);
    console.log(frequencyCounter2);


    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false;
        }

        if(frequencyCounter2[key**2] !== frequencyCounter1[key]){
            return false;
        }
    }

    return true;
}



var arr1 = [1,2,3];
var arr2 = [4,1,9];

console.log(same2(arr1, arr2));
