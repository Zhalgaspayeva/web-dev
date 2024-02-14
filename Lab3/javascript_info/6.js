// let func = function(arg1, arg2, ..., argN) {
//     return expression;
//   };

let sum = (a, b) => a + b;
/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/
alert( sum(1, 2) ); // 3

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }
alert( double(3) ); // 6

let sayHi = () => alert("Hello!");
sayHi();

let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello!') :
  () => alert("Greetings!");
welcome();

alert('Hello')
alert('World')

alert("There will be an error after this message")

[1, 2].forEach(alert)

let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");
alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true

// // 1
// while (condition) {
//     ...
//   }
  
//   // 2
//   do {
//     ...
//   } while (condition);
  
//   // 3
//   for(let i = 0; i < 10; i++) {
//     ...
//   }

let age1 = prompt('Your age?', 18);

switch (age1) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}

// expression on the right side
let summ = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum1 = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHii = () => alert("Hello");

// with a single argument
let doublee = n => n * 2;

