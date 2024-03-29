let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let ii = 3;
while (ii) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( ii );
  ii--;
}

// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);

// for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
//     alert(i);
// }

// for (let i = 0; i < 3; i++) alert(i)

// run begin
let a = 0
// if condition → run body and run step
if (a < 3) { alert(a); a++ }
// if condition → run body and run step
if (a < 3) { alert(a); a++ }
// if condition → run body and run step
if (a < 3) { alert(a); a++ }
// ...finish, because now a == 3


// let i = 0; // we have i already declared and assigned
// for (; i < 3; i++) { // no need for "begin"
//   alert( i ); // 0, 1, 2
// }

let sum = 0;
while (true) {
  let value = +prompt("Enter a number", '');
  if (!value) break; // (*)
  sum += value;
}
alert( 'Sum: ' + sum );

for (let i = 0; i < 10; i++) {
    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    alert(i); // 1, then 3, 5, 7, 9
}

for (let i = 0; i < 10; i++) {
    if (i % 2) {
      alert( i );
    }  
}

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, '');
      // what if we want to exit from here to Done (below)?
    }
  }
alert('Done!');

outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let input = prompt(`Value at coords (${i},${j})`, '');
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
      // do something with the value...
    }
  }
alert('Done!');

let z = 3;
alert(z--); // shows 3, decreases i to 2
alert(z--) // shows 2, decreases i to 1
alert(z--) // shows 1, decreases i to 0
// done, while(i) check stops the loop