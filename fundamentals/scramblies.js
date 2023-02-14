/**
 * https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
 * 
 * Scramblies
 *
 * Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
 *
 * Notes:
 *
 * Only lower case letters will be used (a-z). No punctuation or digits will be included.
 * Performance needs to be considered.
 *
 *
 * Examples:
 * scramble('rkqodlw', 'world') ==> True
 * scramble('cedewaraaossoqqyt', 'codewars') ==> True
 * scramble('katas', 'steak') ==> False
 */

function scramble(str1, str2) {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  for (const index in arr2) {
    const char = arr2[index];

    const hasIndex = arr1.indexOf(char);

    if (hasIndex === -1) {
      return false;
    }

    arr1.splice(hasIndex, 1);
  }

  return true;
}

console.log(scramble("rkqodlw", "world"), true);
console.log(scramble("cedewaraaossoqqyt", "codewars"), true);
console.log(scramble("katas", "steak"), false);

console.log(scramble("scriptjavx", "javascript"), false);
console.log(scramble("javscripts", "javascript"), false);

console.log(scramble("scriptingjava", "javascript"), true);
console.log(scramble("scriptsjava", "javascripts"), true);

console.log(scramble("jscripts", "javascript"), false);
console.log(scramble("aabbcamaomsccdd", "commas"), true);
console.log(scramble("commas", "commas"), true);
console.log(scramble("sammoc", "commas"), true);
