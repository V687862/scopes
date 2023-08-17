/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/

const arrowAvgValue = (array) => {
  // Sum all numbers in the array using the reduce method
  let total = array.reduce((acc, curr) => acc + curr, 0);
  // Divide the total sum by the length of the array to get the average
  return total / array.length;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  module.exports = null;
}
