/**
 * Convert string to camel case
 *
 *
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing.
 * The first word within the output should be capitalized only if the original word was capitalized
 * (known as Upper Camel Case, also often referred to as Pascal case).
 * The next words should be always capitalized.
 *
 *
 * Examples
 * "the-stealth-warrior" gets converted to "theStealthWarrior"
 * "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 */

function toCamelCase(str) {
  const list = str.split(/[-_]/);

  return list
    .map((item, index) => {
      if (index === 0) return item;
      return item.charAt(0).toUpperCase() + item.slice(1);
    })
    .join("");
}

// Alternative:
// function toCamelCase(str) {
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }
