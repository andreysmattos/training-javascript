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

/*

NO SEGUNDO FOR, A IDEIA É FAZER COM QUE ELE PARE DE PESQUISAR SE O "INDEX" FOR MAIOR QUE O ENCONTRADO ANTERIORAMENTE


*/
function sumPairs(list, number) {
  let result = false;

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === list[index - 1]) {
      continue;
    }

    const need = number - element;

    for (let indexTwo = index + 1; indexTwo < list.length; indexTwo++) {
      const elementTwo = list[indexTwo];

      if (result && indexTwo > result[0]) {
        break;
      }

      if (elementTwo === need) {
        result = [indexTwo, element, elementTwo];
      }
    }
  }

  if (!result) return undefined;

  result.shift();
  return result;
}

// Alternatives:
// https://www.codewars.com/kata/54d81488b981293527000c8f/solutions/javascript

var sum_pairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}



function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
  }
}