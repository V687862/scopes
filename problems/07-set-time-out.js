/***********************************************************************
Write a function named `funcTimer(time, func)` that will allow you to hand
in a function and a number representing milliseconds. The `funcTimer` should use
the global.setTimeout function to invoke the passed in function in `time` amount
of seconds.

There are no specs for this problem - try it in the console yourself to
test your answer!

Examples:

function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


***********************************************************************/

// // Function that takes in a time (in milliseconds) and another function as its parameters.
// function funcTimer(time, func) {
//   // Define a new function that will call the function passed into funcTimer.
//   function delayedFunction() {
//       // Call the function passed into funcTimer.
//       func();
//   }
//   // Use the setTimeout method to delay the execution of the delayedFunction by the specified time.
//   // setTimeout will execute the provided function after the given time has elapsed.
//   setTimeout(delayedFunction, time);
// }

// const funcTimer = (time, func) =>
//     // Directly use the setTimeout method.
//     // This delays the execution of the passed function 'func' by the specified time in milliseconds.
//     setTimeout(func, time);

const funcTimer = (time, func) => {return setTimeout(func, time);}

function partyFunc () {
  console.log("Party time!")
}

funcTimer(5000, partyFunc); // in 5 seconds prints: "Party time!"


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = funcTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
