//Example: check if there are any duplicates among the agruments passed in function

//My solution: Frequency counter (O(n))

function areThereDuplicates(){
    if(arguments.length === 0) return false;
    
    const frequencyCounter = {};

    for(let agrument in arguments){
        frequencyCounter[arguments[agrument]] = (frequencyCounter[arguments[agrument]] || 0) + 1;
    }

    for(let key in frequencyCounter){
        if(frequencyCounter[key] > 1){
            return true;
        }
    }

    return false;
}

//Solution: Multiple points (O(n))
function areThereDuplicates2(...args){
    args.sort();

    let start = 0;
    let next = 1;

    while(next < args.length){
        if(args[start] === args[next]) return true;

        start++;
        next++;
    }

    return false;
}

//One line solution: use Set()
function areThereDuplicates3() {
    //set store unique values
    return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates3('a', 'b', 'c', 'd'));