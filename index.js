function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);

  return classPoints.reduce((acc, cur) => acc + cur) / classPoints.length < yourPoints;
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 5));
// console.log(past(0, 1, 1));
// console.log(past(1, 0, 0));
