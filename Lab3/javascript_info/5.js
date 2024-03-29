function sayHi() {
    alert( "Hello" );
  }

  let sayHi = function() {
    alert( "Hello" );
  };

  function sayHi() {   // (1) create
    alert( "Hello" );
  }
  
  let func = sayHi;    // (2) copy
  func(); // Hello     // (3) run the copy (it works)!
  sayHi(); // Hello    //     this still works too (why wouldn't it)

  function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);

  sayHi("John"); // Hello, John

  function sayHi(name) {
    alert( `Hello, ${name}` );
  }

  sayHi("John"); // error!

  let sayHi = function(name) {  // (*) no magic any more
    alert( `Hello, ${name}` );
  };

  let age = prompt("What is your age?", 18);
  // conditionally declare a function
  if (age < 18) {
    function welcome() {
      alert("Hello!");
    }
  } else {
    function welcome() {
      alert("Greetings!");
    }
  }
  // ...use it later
  welcome(); // Error: welcome is not defined

//   let age = 16; // take 16 as an example
//   if (age < 18) {
//     welcome();               // \   (runs)
//                              //  |
//     function welcome() {     //  |
//       alert("Hello!");       //  |  Function Declaration is available
//     }                        //  |  everywhere in the block where it's declared
//                              //  |
//     welcome();               // /   (runs)
//   } else {
//     function welcome() {
//       alert("Greetings!");
//     }
//   }
//   // Here we're out of curly braces,
//   // so we can not see Function Declarations made inside of them.
//   welcome(); // Error: welcome is not defined
  
