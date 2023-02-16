/**
 * Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
 * Example:
 *
 * Input:
 * 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
 *
 * Output:
 * 'alpha beta gamma delta'
 *
 */

function removeDuplicateWords(s) {
  const list = s.split(" ");

  return list
    .reduce((prev, cur, index) => {
      if (prev.indexOf(cur) === -1) prev.push(cur);
      return prev;
    }, [])
    .join(" ");
}

// Alternative:
const removeDuplicateWords = (s) => [...new Set(s.split(" "))].join(" ");
