/**
 * Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
 *
 * pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
 * pigIt('Hello world !');     // elloHay orldway !
 */

const reserved = ["!", ",", ".", "?"];

function pigIt(str) {
  const list = str.split(" ");

  console.log(list);

  const wordChanged = list.map((item) => {
    if (reserved.includes(item)) return item;

    return item.slice(1) + item.charAt(0) + "ay";
  });

  return wordChanged.join(" ");
}

// Alternative:
function pigIt(str) {
  return str.replace(/(\w)(\w*)(\s|$)/g, "$2$1ay$3");
}

console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("This is my string")); // hisTay siay ymay tringsay
console.log(pigIt("Hello world !")); // elloHay orldway !
