// function additionCalculator(a, b) {
//   return a + b;
// }

// module.exports = additionCalculator;


function additionCalculator(...numbers) {
  return numbers.reduce((sum, item) => sum + item, 0);
}

// without babel
// module.exports = additionCalculator;

// with babel
export default additionCalculator;
