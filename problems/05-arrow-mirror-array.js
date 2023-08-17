/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

// const arrowMirrorArray = (array) => {
//   // Concatenate the original array with its reversed version
//   return array.concat(array.slice().reverse());
// };

const arrowMirrorArray = (array) => {
  // Create a copy of the original array
  let result = [...array];
  
  // Iterate backwards through the original array and push each element to the result
  for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
  }
  
  return result;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  module.exports = null;
}
