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
  // const MAX_ITEM_CHUNK = 5
  const result = "";

  let chunkA = a.match(/.{1,5}/g);
  let chunkB = b.match(/.{1,5}/g);

  chunkA = chunkA.map(Number).reverse();
  chunkB = chunkB.map(Number).reverse();

  const smallestChunk = Math.min(chunkA.length, chunkB.length);

  console.log(chunkA);
  console.log(chunkB);

  let rest = 0;

  for (let i = 0; i < smallestChunk; i++) {
    const sum = chunkA[i] + chunkB[i] + rest;
    let sumString = "" + sum;

    if (sumString.length > 5) {
      rest = Number(sumString.charAt(0));
      // 123456
      sumString = sumString.slice(1, 5);
    } else {
      rest = 0;
    }

    console.log({ sumString });
  }

  /*
  const x = 6789;
  const y = 6556;
  // 13345

  // 67 + 65 = 132
  // 89 + 56 = 145

  console.log("x + y", x + y);

  //   console.log((845 + ))

  // return (BigInt(a) + BigInt(b)).toString();
  */
}

add("289347293874", "90938498237058");

// console.log(add('63829983432984289347293874', '90938498237058927340892374089'), "91002328220491911630239667963")
