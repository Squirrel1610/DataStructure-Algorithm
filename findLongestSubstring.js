//returns the length of the longest substring with all distinct characters.

//Example:
// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6


function findLongestSubstring(str) {
  let start = 0;
  let longest = 0;
  let seen = {} //store the next index after duplicating a char

  for(let i = 0 ; i < str.length; i++){
    let char = str[i];

    if(seen[char]){
      start = Math.max(start, seen[char]);
    }

    longest = Math.max(longest, i - start + 1);
    
    seen[char] = i + 1;
  }

  return longest;
}

console.log(findLongestSubstring('rithmschool'))