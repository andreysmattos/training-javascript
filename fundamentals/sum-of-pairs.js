/**
 * Sum of Pairs
 * Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
 *
 * If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
 *
 *
 * sum_pairs([11, 3, 7, 5],         10)
 * #              ^--^      3 + 7 = 10
 * == [3, 7]
 *  *
 * sum_pairs([4, 3, 2, 3, 4],         6) *
 * #          ^-----^         4 + 2 = 6, indices: 0, 2 * *
 * #             ^-----^      3 + 3 = 6, indices: 1, 3 *
 * #                ^-----^   2 + 4 = 6, indices: 2, 4 *
 * #  * the correct answer is the pair whose second value has the smallest index *
 * == [4, 2] *
 *  *
 * sum_pairs([0, 0, -2, 3], 2) *
 * #  there are no pairs of values that can be added to produce 2. *
 * == None/nil/undefined (Based on the language) *
 *  *
 * sum_pairs([10, 5, 2, 3, 7, 5],         10) *
 * #              ^-----------^   5 + 5 = 10, indices: 1, 5 *
 * #                    ^--^      3 + 7 = 10, indices: 3, 4 * *
 * #  * the correct answer is the pair whose second value has the smallest index
 * == [3, 7]
 */

function sumPairs(list, number) {
  let result = [];

  for (let index = 0; index < list.length; index++) {
    const item = list[index];
    const need = number - item;

    // if(need === 0) { return [index, index]}

    const foundIndex = list.indexOf(need, index + 1);

    let foundItem = null;

    if (foundIndex !== -1) {
      foundItem = list[foundIndex];
      const countIndex = foundIndex - index;

      if ((result.length && result[0] > countIndex) || result.length === 0) {
        result = [foundIndex - index, item, foundItem];
      }
    }
  }

  if(result.length ===0) return undefined;
  

  result.shift();
  return result;
}

// console.assert(
//   sumPairs([1, 4, 8, 7, 3, 15], 8),
//   [1, 7],
//   "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8"
// );
// console.assert(
//   sumPairs([1, -2, 3, 0, -6, 1], -6),
//   [0, -6],
//   "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6"
// );
console.log(
  sumPairs([20, -13, 40], -7),
  undefined,
  "No Match: [20, -13, 40] should return undefined for sum = -7"
);
// console.assert(
//   sumPairs([1, 2, 3, 4, 1, 0], 2),
//   [1, 1],
//   "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2"
// );
// console.assert(
//   sumPairs([10, 5, 2, 3, 7, 5], 10),
//   [3, 7],
//   "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10"
// );
// console.assert(
//   sumPairs([4, -2, 3, 3, 4], 8),
//   [4, 4],
//   "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8"
// );
// console.assert(
//   sumPairs([0, 2, 0], 0),
//   [0, 0],
//   "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0"
// );
// console.assert(
//   sumPairs([5, 9, 13, -3], 10),
//   [13, -3],
//   "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10"
// );

// OLD CODE
/*
function sumPairs(list, number) {
  // [secondKey, first, second]
  let result = [];

  for (let firstKey = 0; firstKey < list.length; firstKey++) {
    const first = list[firstKey];

    let stop = list.length;

    if(result.length){
        stop = result[0];
        // console.log({stop});
    }
    let i = 0;
    for (let secondKey = firstKey + 1; secondKey < list.length; secondKey++) {
        i++;
      const second = list[secondKey];

      if (first + second !== number) continue;

      if (result.length === 0 || result[0] > secondKey) {
        result = [secondKey, first, second];
        break;
        // console.log({result})
      }
    }
  }
  return result.length ? [result[1], result[2]] : undefined;
}
*/
