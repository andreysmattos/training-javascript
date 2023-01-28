/**
 * You will be given an array of numbers.
 * You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
 *
 * Examples
 * [7, 1]  =>  [1, 7]
 * [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
 * [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
 */

function sortArray(array) {
  const odds = array.filter((value) => value % 2 !== 0);
  odds.sort((a, b) => a - b);
  return array.map((item) => (item % 2 !== 0 ? odds.shift() : item));
}

// difficulty: sort a number array needs a callback funciton, and guess? i forgot! so, the array was sorted alphabetically
