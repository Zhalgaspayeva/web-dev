function showMessage() {
    alert( 'Hello everyone!' );
  }

function name(parameter1, parameter2, ... parameterN) {
 // body
}

function showMessage() {
    alert( 'Hello everyone!' );
  }
showMessage();

function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
    alert( message );
}
showMessage(); // Hello, I'm JavaScript!
alert( message ); // <-- Error! The variable is local to the function

let userName = 'John';
function showMessage() {
  userName = "Bob"; // (1) changed the outer variable
  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
showMessage();
alert( userName ); // Bob, the value was modified by the function

function showMessage(from, text) { // parameters: from, text
    alert(from + ': ' + text);
}
showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

function showMessage(from, text) {
    from = '*' + from + '*'; // make "from" look nicer
    alert( from + ': ' + text );
  }
  let from = "Ann";
  showMessage(from, "Hello"); // *Ann*: Hello
  // the value of "from" is the same, the function modified a local copy
  alert( from ); // Ann

function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
}
showMessage("Ann"); // Ann: no text given

function showMessage(from, text) {
    if (text === undefined) {
      text = 'no text given';
    }
    alert( from + ": " + text );
}

function showCount(count) {
    // if count is undefined or null, show "unknown"
    alert(count ?? "unknown");
  
}
showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
}
  let age = prompt('How old are you?', 18);
if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied' );
}

function doNothing() {
    return;
  }
  
  alert( doNothing() === undefined ); // true

//   showMessage(..)     // shows a message
//   getAge(..)          // returns the age (gets it somehow)
//   calcSum(..)         // calculates a sum and returns the result
//   createForm(..)      // creates a form (and usually returns it)
//   checkPermission(..) // checks a permission, returns true/false

function showPrimes(n) {
    nextPrime: for (let i = 2; i < n; i++) {
  
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert( i ); // a prime
    }
  }

  function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);  // a prime
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if ( n % i == 0) return false;
    }
    return true;
  }