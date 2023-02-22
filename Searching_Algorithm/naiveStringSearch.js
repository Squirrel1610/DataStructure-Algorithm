// count number of times smaller string appears in a longer string

function naiveStringSearch(long, short){
    let count = 0;
    for(var i = 0 ; i < long.length - short.length + 1 ; i++) {
        for(var j = 0 ; j < short.length ; j++){
            if(short[j] != long[i + j]) break;
            if(j == short.length - 1) count++;
        }
    }
    return count;
}

console.log(naiveStringSearch("wowomgzomg", "omg"));