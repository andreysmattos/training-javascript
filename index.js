function likes(names) {
  if (names.length === 0) return "no one likes this";
  if (names.length === 1) return `${names[0]} likes this`;

  if (names.length < 4) {
    console.log(names.slice(0, names.length - 2));
    return `${names.slice(0, -2).join(", ")}  ${names
      .slice(-2)
      .join(" and ")} like this`.trim();
  }

  return (
    names.slice(0, 2).join(", ") + ` and ${names.length - 2} others like this`
  );
}

// console.log(likes(["Jacob", "Alex"]), "Jacob and Alex like this");
console.log(likes(["Max", "John", "Mark"]), "Max, John and Mark like this");

// console.log(likes([]), "no one likes this");
// console.log(likes(["Peter"]), "Peter likes this");

// console.log(
//   likes(["Alex", "Jacob", "Mark", "Max"]),
//   "Alex, Jacob and 2 others like this"
// );

// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript