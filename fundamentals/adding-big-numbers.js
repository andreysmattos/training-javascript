// https://www.codewars.com/kata/525f4206b73515bffb000b21

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

  let chunkA = a.match(/.{1,2}/g);
  let chunkB = b.match(/.{1,2}/g);

  chunkA = chunkA.map(Number).reverse();
  chunkB = chunkB.map(Number).reverse();

  const maxSize = Math.max(chunkA.length, chunkB.length);

  for (let index = 0; index < maxSize; index++) {
    console.log("xd");
    chunkA[index] = chunkA[index] ? chunkA[index] : 0;
    chunkB[index] = chunkB[index] ? chunkB[index] : 0;
  }

  // console.log({ chunkA, chunkB });

  let rest = 0;
  for (let i = 0; i < maxSize; i++) {
    const sum = chunkA[i] + chunkB[i] + rest;
    let sumString = "" + sum;

    if (sumString.length > 2) {
      rest = Number(sumString.charAt(0));
      sumString = sumString.slice(1, 3);
    } else {
      rest = 0;
    }
    result.push(sumString);
  }

  if (rest > 0) {
    result[result.length - 1] = Number(result[0]) + rest + "";
  }

  // console.log({ result, rest });

  return result.reverse().join("");
}

// add("28934", "909384982");
//909413916
console.log(add("888", "222"));
// , "1110");

// console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
