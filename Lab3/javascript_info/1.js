alert('Hello'); alert('World');

alert(3 + 1 + 2);

let message;
message = 'Hello!';
message = 'World!'; // value changed
alert(message);

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
alert($ + _); // 3

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";
// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

alert( 1 / 0 ); // Infinity

alert( "not a number" / 2 ); // NaN, such division is erroneous

alert( NaN + 1 ); // NaN
alert( 3 * NaN ); // NaN
alert( "not a number" / 2 - 1 ); // NaN

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 2); // 9007199254740992

let name = "John";
alert( `Hello, ${name}!` ); // Hello, John!
alert( `the result is ${1 + 2}` ); // the result is 3

let isGreater = 4 > 1;
alert( isGreater ); // true (the comparison result is "yes")

let age = 100;
// change the value to undefined
age = undefined;
alert(age); // "undefined"

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)


let name1 = "Ilya";
// the expression is a number 1
alert( `hello ${1}` ); // hello 1
// the expression is a string "name"
alert( `hello ${"name"}` ); // hello name
// the expression is a variable, embed it
alert( `hello ${name1}` ); // hello Ilya

alert("Hello");

//result = prompt(title, [default]);
let age1 = prompt('How old are you?', 100);
alert(`You are ${age1} years old!`); // You are 100 years old!

result = confirm(question);
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string

let str = "123";
alert(typeof str); // string

let num = Number(str); // becomes a number 123

alert(typeof num);

let age2 = Number("an arbitrary string instead of a number");
alert(age2); // NaN, conversion failed

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false

let a = 1;

a = -a;
alert( a ); // -1, unary negation was applied

let b = 1, c = 3;
alert( c - b ); // 2, binary minus subtracts values

alert( 5 % 2 ); // 1, the remainder of 5 divided by 2
alert( 8 % 3 ); // 2, the remainder of 8 divided by 3
alert( 8 % 4 ); // 0, the remainder of 8 divided by 4

alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

alert( 4 ** (1/2) ); // 2 (power of 1/2 is the same as a square root)
alert( 8 ** (1/3) ); // 2 (power of 1/3 is the same as a cubic root)

let s = "my" + "string";
alert(s); // mystring

alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"

alert(2 + 2 + '1' ); // "41" and not "221"
alert('1' + 2 + 2); // "122" and not "14"

// No effect on numbers
let x = 1;
alert( +x ); // 1
let y = -2;
alert( +y ); // -2
// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";
alert( apples + oranges ); // "23", the binary plus concatenates strings

let g = 2 * 2 + 1;
alert( g ); // 5

let a1 = 1;
let b1 = 2;
let c1 = 3 - (a1 = b1 + 1);
alert( a1 ); // 3
alert( c1 ); // 0

let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)
alert( n ); // 14

let counte1 = 2;
counter1++;        // works the same as counter = counter + 1, but is shorter
alert( counter1 ); // 3

let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

let counter2 = 0;
counter2++;
++counter2;
alert( counter2 ); // 2, the lines above did the same

let aa = (1 + 2, 3 + 4);
alert( aa ); // 7 (the result of 3 + 4)

let aaa = 1, bbb = 1;

alert( ++aaa ); // 2, prefix form returns the new value
alert( bbb++ ); // 1, postfix form returns the old value

alert( aaa ); // 2, incremented once
alert( bbb ); // 2, incremented once