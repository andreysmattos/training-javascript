/**
 * Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
 * array = [[1,2,3],
 *          [4,5,6],
 *          [7,8,9]]
 * snail(array) #=> [1,2,3,6,9,8,7,4,5]
 *
 * For better understanding, please follow the numbers of the next array consecutively:
 *
 *
 *
 *
 * array = [[1,2,3],
 *          [8,9,4],
 *          [7,6,5]]
 * snail(array) #=> [1,2,3,4,5,6,7,8,9]
 *
 *
 * This image will illustrate things more clearly:
 * http://www.haan.lu/files/2513/8347/2456/snail.png
 *
 *
 * NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.
 *
 * NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
 */

function stealRight(array) {
  if (array.length === 0) return [];
  return array.shift();
}

function stealLeft(array) {
  if (array.length === 0) return [];
  return array.pop().reverse();
}

function stealDown(array) {
  if (array.length === 0) return [];
  const rights = [];

  for (let index = 0; index < array.length - 1; index++) {
    rights.push(array[index].pop());
  }

  return rights;
}

function stealUp(array) {
  if (array.length === 0) return [];
  const lefts = [];

  for (let index = array.length - 1; index >= 1; index--) {
    lefts.push(array[index].shift());
  }

  return lefts;
}

snail = function (array) {
  let result = [];

  while (array.length) {
    result = result.concat(stealRight(array));
    result = result.concat(stealDown(array));
    result = result.concat(stealLeft(array));
    result = result.concat(stealUp(array));
  }

  return result;
};

// console.log(snail([[]]), []);

console.log(
  snail([
    [1, 2, 3, 4, 5, 6],
    [20, 21, 22, 23, 24, 7],
    [19, 32, 33, 34, 25, 8],
    [18, 31, 36, 35, 26, 9],
    [17, 30, 29, 28, 27, 10],
    [16, 15, 14, 13, 12, 11],
  ]),
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ]
);

// snail([
//   [1, 2, 3, 4, 5, 6],
//   [20, 21, 22, 23, 24, 7],
//   [19, 32, 33, 34, 25, 8],
//   [18, 31, 36, 35, 26, 9],
//   [17, 30, 29, 28, 27, 10],
//   [16, 15, 14, 13, 12, 11],
// ]);
// snail([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

// console.log(
//   snail([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
//   [1, 2, 3, 6, 9, 8, 7, 4, 5]
// );
