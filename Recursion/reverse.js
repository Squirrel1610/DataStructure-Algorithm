//reverse a string

function reverse(str){
    let newStr = [];

    let len = str.length;

    if(len === 0) return newStr.join("");

    newStr.push(str[len - 1]);

    newStr = newStr.concat(reverse(str.substring(0, len -1)))

    return newStr.join("");
}

// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }

console.log(reverse("awesome"));