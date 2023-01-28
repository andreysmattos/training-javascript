/**
 * There is an array with some numbers. All numbers are equal except for one. Try to find it!
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 * It’s guaranteed that array contains at least 3 numbers.
 * Think about performance.
 *
 */

// function findUniq(arr) {
//   const counted = arr.reduce((acc, value) => {
//     acc[value] = arr.filter((item) => item === value).length;
//     return acc;
//   }, {});

//   return Number(Object.keys(counted).find((key) => counted[key] === 1));
// }

function findUniq(arr) {
  const unique = arr.reduce((acc, value, index) => {
    const hasAnother = arr.indexOf(value, index + 1);

    if (hasAnother !== -1) {
      acc = acc.filter((item) => item !== value);
    }
    return acc;
  }, arr);

  return unique[0];
}

// Alternative:
function findUniq(arr) {
  return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

/*
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
*/
