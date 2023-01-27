/**
 * The main idea is to count all the occurring characters in a string.
 * If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
 *
 * What if the string is empty? Then the result should be empty object literal, {}
 */

function count(string) {
  const list = string.split("");
  const listUnique = list.filter((item, index) => list.indexOf(item) === index);
  const obj = {};
  listUnique.map((char) => {
    obj[char] = list.filter((_char) => _char == char).length;
  });

  return obj;
}

// Alternative:
function count(string) {
  var count = {};
  string.split("").forEach(function (s) {
    count[s] ? count[s]++ : (count[s] = 1);
  });
  return count;
}
