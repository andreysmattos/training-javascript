/**
 * Complete the function that

 * accepts two integer arrays of equal length
 * compares the value each member in one array to the corresponding member in the other
 * squares the absolute value difference between those two values
 * and returns the average of those squared absolute value difference between each member pair.
 * 
 * Examples:
 * [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
 * [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
 * [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
 * 
 */

var solution = function (firstArray, secondArray) {
  let sum = 0;

  for (let i = 0; i < firstArray.length; i++) {
    const first = firstArray[i];
    const second = secondArray[i];

    const absDif = Math.abs(second - first);
    const pow = Math.pow(absDif, 2);
    sum += pow;
  }

  return sum / firstArray.length;
};

// Alternative:
function solution(a, b) {
    return a.reduce(function(s, n, i) { return s + Math.pow(n - b[i], 2) }, 0) / a.length;
}

// console.log(solution([10, 20, 10, 2], [10, 25, 5, -2])); // 16.5 because (0 + 25 + 25 + 16) / 4
console.log(solution([-1, 0], [0, -1])); //  1   because (1 + 1) / 2
