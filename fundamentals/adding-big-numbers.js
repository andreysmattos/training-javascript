/**
 * We need to sum big numbers and we require your help.
 *
 * Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
 *
 * Example
 *
 * add("123", "321"); -> "444"
 * add("11", "99");   -> "110"
 *
 * Notes
 * - Do not is allowed to use BigInt
 * - The input numbers are big.
 * - The input is a string of only digits
 * - The numbers are positives
 */

function add(a, b) {
  const result = [];

  const chunkA = a.split("").reverse().map(Number);
  const chunkB = b.split("").reverse().map(Number);

  console.log({ chunkA, chunkB });

  const maxSize = Math.max(chunkA.length, chunkB.length);

  for (let index = 0; index < maxSize; index++) {
    chunkA[index] = chunkA[index] ? chunkA[index] : 0;
    chunkB[index] = chunkB[index] ? chunkB[index] : 0;
  }

  console.log({ chunkA, chunkB });

  let rest = 0;
  for (let i = 0; i < maxSize; i++) {
    const sum = chunkA[i] + chunkB[i] + rest;
    let sumString = "" + sum;

    if (sumString.length > 1) {
      rest = Number(sumString.charAt(0));
      sumString = sumString.slice(1, 2);
    } else {
      rest = 0;
    }
    result.push(sumString);
  }

  if (rest > 0) result.push("" + rest);

  return result.reverse().join("");
}

// Alternative
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT

function add(a, b) {
  var res = "",
    c = 0;
  a = a.split("");
  b = b.split("");
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = (c % 10) + res;
    c = c > 9;
  }
  return res;
}
