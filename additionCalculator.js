// function additionCalculator(a, b) {
//   return a + b;
// }

// module.exports = additionCalculator;


function additionCalculator(...numbers) {
  return numbers.reduce((sum, item) => sum + item, 0);
}

module.exports = additionCalculator;
