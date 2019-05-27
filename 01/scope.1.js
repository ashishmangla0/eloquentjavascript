
 
// Each binding has a scope, which is the part of the program in which the binding is visible. 
// For bindings defined outside of any function or block, the scope is the whole program—you can 
// refer to such bindings wherever you want. 
// These are called global. 

let x = 10;
// let y = 20;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z );