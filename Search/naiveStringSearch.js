//count the apperiance of pattern in a string

function naiveStringSearch(long, short){
    let count = 0;

    for(let i = 0 ; i < long.length; i++){
        for(let j = 0 ; j < short.length; j++){
            console.log(long[i + j] , short[j])
            if(long[i + j] !== short[j]){
                console.log("break");
                break;
            }

            if(j === short.length -1) {
                console.log("count");
                count++;
            }
        }
    }

    return count;
}

console.log(naiveStringSearch("hi thinh", "hi"));
// 0 0 : h h
// 0 1 : i i
// 0 2  ???
