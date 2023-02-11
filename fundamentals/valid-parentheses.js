/**
 * Write a function that takes a string of parentheses,
 * and determines if the order of the parentheses is valid.
 * The function should return true if the string is valid, and false if it's invalid.
 *
 *
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 */

const openParentheses = "(";
const closeParentheses = ")";

function validParentheses(parens) {
  const array = parens.split("");

  let count = 0;

  while (count < array.length) {
    const cur = array[count];
    const next = array[count + 1];

    if (array.length < 5) {
      console.log("aki", array);
    }

    if (!next) break;

    if (cur === openParentheses && next === closeParentheses) {
      console.log("\\/ \\/ \\/");
      console.log({ count });
      console.log("array before", array);
      array.splice(count, 2);
      console.log("array after", array);
      count = 0;
      continue;
    }

    count++;
  }

  return array.length === 0;
}

// Alternative:
function validParentheses(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }

  return n == 0;
}
