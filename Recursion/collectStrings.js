//Give an object and returns an array of all the values in the object that have a typeof string

//Solution
function collectStrings(obj){
    let words = [];

    for(let key in obj){
        if(typeof obj[key] === "string"){
            words.push(obj[key]);
        }else if(typeof obj[key] === "object"){
            words = words.concat(collectStrings(obj[key]))
        }
    }

    return words;
}


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

console.log(collectStrings(obj));