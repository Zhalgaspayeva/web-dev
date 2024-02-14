alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

let a = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a == b); // true!

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

5 > 4 // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // false
null === +"\n0\n" // false

let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert( 'You are right!' );
if (year == 2015) {
    alert( "That's correct!" );
    alert( "You're so smart!" );
  }

if (year == 2015) {
    alert( 'You guessed it right!' );
} else {
    alert( 'How can you be so wrong?' ); // any value except 2015
}

let accessAllowed;
let age = prompt('How old are you?', '');
if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);

let age1 = prompt('age?', 18);

let message = (age1 < 3) ? 'Hi, baby!' :
  (age1 < 18) ? 'Hello!' :
  (age1 < 100) ? 'Greetings!' :
  'What an unusual age!';
alert( message );

if (age < 3) {
    message = 'Hi, baby!';
} else if (age < 18) {
    message = 'Hello!';
} else if (age < 100) {
    message = 'Greetings!';
} else {
    message = 'What an unusual age!';
}

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
}

let hour = 9;
if (hour < 10 || hour > 18) {
  alert( 'The office is closed.' );
}

let hour1 = 12;
let isWeekend = true;

if (hour1 < 10 || hour1 > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
}

alert( 1 || 0 ); // 1 (1 is truthy)
alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)
alert( undefined || null || 0 ); // 0 (all falsy, returns the last value)

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour2 = 12;
let minute = 30;

if (hour2 == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
  }

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

alert( !true ); // false
alert( !0 ); // true
alert( !!"non-empty string" ); // true
alert( !!null ); // false
alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false

result = (a !== null && a !== undefined) ? a : b;

let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let user1 = "John";
alert(user1 ?? "Anonymous"); // John (user is not null/undefined)

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

let x = (1 && 2) ?? 3; // Works
alert(x); // 2