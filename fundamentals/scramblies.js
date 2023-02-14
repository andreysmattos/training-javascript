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
  const uniques = [...new Set(str2.split(""))];

  for (const index in uniques) {
    const char = uniques[index];

    const regex = new RegExp(`${char}`, "g");

    const count1 = (str1.match(regex) || []).length;
    const count2 = (str2.match(regex) || []).length;

    if (count1 < count2) return false;
  }

  return true;
}