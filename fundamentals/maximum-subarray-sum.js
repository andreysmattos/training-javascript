/**
 * The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
 * maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 * // should be 6: [4, -1, 2, 1]
 *
 * Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
 * If the list is made up of only negative numbers, return 0 instead.
 *
 * Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
 *
 */

var maxSequence = function (arr) {
  let result = 0;

  for (let primaryKey = 0; primaryKey < arr.length; primaryKey++) {
    let sum = arr[primaryKey];

    for (
      let secondaryKey = primaryKey;
      secondaryKey < arr.length;
      secondaryKey++
    ) {
      if (secondaryKey !== primaryKey) {
        sum += arr[secondaryKey];
      } else {
        sum = arr[secondaryKey];
      }

      if (sum > result) {
        result = sum;
      }
    }
  }
  return result;
};


// Alternative:
var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}
