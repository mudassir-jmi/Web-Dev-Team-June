// 🚀 function are subprograms which are used to compute a value 
// or perform a task 🚀 😺

// SYNTAX..... 🚀

// function function_name() {
//     ...
//     ...
// }

// RULES to Define Function 🚀 😄 👇
// 1. function name only starts with a letter an underscore(_)
// 2. function name cannot start with a number 
// 3. Do not use reserved keywords
// 4. fucntion names are case-sensitive in JavaScript 🚀

// CREATE FUNCTION 🚀 😄
function display() {  // declare
   console.log("Mudassir");
}

display(); // call

// ADD TWO NUMBER USING FUNCTION 🛩️
function add(num1, num2) {
    console.log(num1 + num2);
}
add(4,5); // call

// fUNCTION FOR login user 🦸
// function login(username, password) {
//     console.log(`${username}, logged success`);
// }
// login('xyz');
// login('abc', 'pass');

// PRINT TABLE USING FUNCTION 🚀

// 2 x 1 = 2

function table(num) {
   for(i = 1; i<=10; i++) {
      document.write(`${num} x ${i} = ${num * i} `);
      document.write("<br>");
   }
}

table(9); // call