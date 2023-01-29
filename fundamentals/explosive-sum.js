// NAO TERMINEI, ESSE É DIFICIL 

/**
 * How many ways can you make the sum of a number?
 *
 * From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)
 *
 * In number theory and combinatorics,
 * a partition of a positive integer n,
 * also called an integer partition,
 * is a way of writing n as a sum of positive integers.
 * Two sums that differ only in the order of their summands are considered the same partition.
 * If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:
 * 4
 * 3 + 1
 * 2 + 2
 * 2 + 1 + 1
 * 1 + 1 + 1 + 1
 *
 * Examples:
 * sum(1) // 1
 * sum(2) // 2  -> 1+1 , 2
 * sum(3) // 3 -> 1+1+1, 1+2, 3
 * sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
 * sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
 * sum(10) // 42
 */

function sum(num) {
    console.log({num})
  const memorization = { 1: [[1]] };

  function getSum(n) {
    if (memorization[n]) {
      return memorization[n];
    }

    const result = [[n]];
    for (let i = 1; i < n; i++) {
        let a = n - i;
        console.log({i, n, a});


    //   let R = getSum(i);

    //   for (let r of R) {
    //     if (r[0] <= a) {
    //       result.push([a].concat(r));
    //     }
    //   }
    }

    memorization[n] = result;

    return result;
  }

  return getSum(num).length;
}

// var startTime = performance.now();
// console.log(sum(4));
sum(5);

// var endTime = performance.now();

// console.log(`Call to doSomething took ${endTime - startTime} milliseconds`);


