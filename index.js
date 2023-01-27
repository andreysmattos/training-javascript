function count(string) {
  const list = string.split("");
  const listUnique = list.filter((item, index) => list.indexOf(item) === index);
  const obj = {};
  listUnique.map((char) => {
    obj[char] = list.filter((_char) => _char == char).length;
  });

  return obj;
}
