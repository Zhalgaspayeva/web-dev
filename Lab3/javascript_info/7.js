// open console to see
for (let i = 0; i < 5; i++) {
    console.log("value,", i);
  }

  if (condition) {
    // do this
    // ...and that
    // ...and that
  }

  if (n < 0) {alert(`Power ${n} is not supported`);}

  if (n < 0)
  alert(`Power ${n} is not supported`);

  if (n < 0) alert(`Power ${n} is not supported`);

  if (n < 0) {
    alert(`Power ${n} is not supported`);
  }

  if (
    id === 123 &&
    moonPhase === 'Waning Gibbous' &&
    zodiacSign === 'Libra'
  ) {
    letTheSorceryBegin();
  }

  show(parameters,
    aligned, // 5 spaces padding at the left
    one,
    after,
    another
 )

function pow(x, n) {
    let result = 1;
    //              <--
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    //              <--
    return result;
  }

  function pow(x, n) {
    if (n < 0) {
      alert("Negative 'n' not supported");
    } else {
      let result = 1;
  
      for (let i = 0; i < n; i++) {
        result *= x;
      }
  
      return result;
    }
  }

  function pow(x,n)  // <- no space between arguments
  {  // <- figure bracket on a separate line
    let result=1;   // <- no spaces before or after =
    for(let i=0;i<n;i++) {result*=x;}   // <- no spaces
    // the contents of { ... } should be on a new line
    return result;
  }
  
  let x=prompt("x?",''), n=prompt("n?",'') // <-- technically possible,
  // but better make it 2 lines, also there's no spaces and missing ;
  if (n<=0)  // <- no spaces inside (n <= 0), and should be extra line above it
  {   // <- figure bracket on a separate line
    // below - long lines can be split into multiple lines for improved readability
    alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
  }
  else // <- could write it on a single line like "} else {"
  {
    alert(pow(x,n))  // no spaces and missing ;
  }

  function showPrimes(n) {
    nextPrime:
    for (let i = 2; i < n; i++) {
  
      // check if i is a prime number
      for (let j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
      }
  
      alert(i);
    }
  }

  function showPrimes(n) {

    for (let i = 2; i < n; i++) {
      if (!isPrime(i)) continue;
  
      alert(i);
    }
  }
  
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
  
    return true;
  }

  // here we add whiskey
for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    smell(drop);
    add(drop, glass);
  }
  
  // here we add juice
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
    examine(tomato);
    let juice = press(tomato);
    add(juice, glass);
  }
  
  // ...

  addWhiskey(glass);
addJuice(glass);

function addWhiskey(container) {
  for(let i = 0; i < 10; i++) {
    let drop = getWhiskey();
    //...
  }
}

function addJuice(container) {
  for(let t = 0; t < 3; t++) {
    let tomato = getTomato();
    //...
  }
}

function ninjaFunction(elem) {
    // 20 lines of code working with elem
  
    elem = clone(elem);
  
    // 20 more lines, now working with the clone of the elem!
  }

  let user = authenticateUser();

// function render() {
//   let user = anotherValue();
//   ...
//   ...many lines...
//   ...
//   ... // <-- a programmer wants to work with user here and...
//   ...
// }

describe("pow", function() {

    it("raises to n-th power", function() {
      assert.equal(pow(2, 3), 8);
    });
  
  });

//   <!DOCTYPE html>
//   <html>
//   <head>
//     <!-- add mocha css, to show results -->
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
//     <!-- add mocha framework code -->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
//     <script>
//       mocha.setup('bdd'); // minimal setup
//     </script>
//     <!-- add chai -->
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
//     <script>
//       // chai has a lot of stuff, let's make assert global
//       let assert = chai.assert;
//     </script>
//   </head>
  
//   <body>
  
//     <script>
//       function pow(x, n) {
//         /* function code is to be written, empty now */
//       }
//     </script>
  
//     <!-- the script with tests (describe, it...) -->
//     <script src="test.js"></script>
  
//     <!-- the element with id="mocha" will contain test results -->
//     <div id="mocha"></div>
  
//     <!-- run tests! -->
//     <script>
//       mocha.run();
//     </script>
//   </body>
  
//   </html>

// before running the transpiler
height = height ?? 100;

// after running the transpiler
height = (height !== undefined && height !== null) ? height : 100;

if (!Math.trunc) { // if no such function
    // implement it
    Math.trunc = function(number) {
      // Math.ceil and Math.floor exist even in ancient JavaScript engines
      // they are covered later in the tutorial
      return number < 0 ? Math.ceil(number) : Math.floor(number);
    };
  }