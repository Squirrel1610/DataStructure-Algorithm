// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

//Pattern: Multiple Pointers
function isPalindrome1(str) {
    let left = 0, right = str.length -1;
    while(left < right){
        if(str[left] == str[right]){
            left++;
            right--;
        }else{
            return false;
        }
    }
    return true;
}

//Recursion
function isPalindrome2(str) {
    if(str[0] !== str[str.length - 1]) return false;
    if(str.length == 0) return true;
    return isPalindrome2(str.slice(1, str.length-1));
}



console.log(isPalindrome2('awesome')) // false
console.log(isPalindrome2('foobar')) // false
console.log(isPalindrome2('tacocat')) // true
console.log(isPalindrome2('amanaplanacanalpanama')) // true
console.log(isPalindrome2('amanaplanacanalpandemonium')) // false