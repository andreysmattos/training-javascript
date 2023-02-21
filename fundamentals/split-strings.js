/**
 * Split Strings
 *
 * Complete the solution so that it splits the string into pairs of two characters.
 * If the string contains an odd number of characters
 * then it should replace the missing second character of the final pair with an underscore ('_').
 *
 * Example:
 * * 'abc' =>  ['ab', 'c_']
 * * 'abcdef' => ['ab', 'cd', 'ef']
 */

function solution(str) {
  if (!str) return [];

  const array = str.match(/(..?)/g);
  if (array[array.length - 1].length === 1) {
    array[array.length - 1] += "_";
  }

  return array;
}

// Alternative:
function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}
