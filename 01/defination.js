/*  
A function is created with an expression that starts with the keyword function.
Functions have a set of parameters(in this case, only x) and a body, 
which contains the statements that are to be executed when the function is called 
*/

const square = function(x) {
  return x * x;
};

console.log(square(12));
console.log(square(2));
console.log(square(24));
console.log(square(30));
