// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

//pure recursion
function collectStrings1(obj) {
    let result = [];
    for(var key in obj){
        if(typeof obj[key] === "string") {
            result.push(obj[key]);
        }else if(typeof obj[key] === "object") {
            result = result.concat(collectStrings1(obj[key]));
        }
    }

    return result;
}

//helper recursion
function collectStrings2(obj) {
    let result = [];

    function gatherStrings(input){
        for(var key in input) {
            if(typeof input[key] === "string") {
                result.push(input[key]);
            }else if(typeof input[key] === "object") {
                return gatherStrings(input[key]);
            }
        }
    }
    gatherStrings(obj);

    return result;
}

console.log(collectStrings2(obj)); // ["foo", "bar", "baz"])