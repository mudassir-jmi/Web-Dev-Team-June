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
// function display() {  // declare
//    console.log("Mudassir");
// }
// display(); // call

// ADD TWO NUMBER USING FUNCTION 🛩️
// function add(num1, num2) {
//     console.log(num1 + num2);
// }
// add(4,5); // call

// fUNCTION FOR login user 🦸
// function login(username, password) {
//     console.log(`${username}, logged success`);
// }
// login('xyz');
// login('abc', 'pass');

// PRINT TABLE USING FUNCTION 🚀

// 2 x 1 = 2

// function table(num) {
//    for(i = 1; i<=10; i++) {
//       document.write(`${num} x ${i} = ${num * i} `);
//       document.write("<br>");
//    }
// }
// table(9); // call

// 16 Aug 2022 ---- 4 PM  ⏲️

// Covert string To UpperCase using Function 🚀
// function upperCase (str) {
//    console.log(str.toUpperCase());
// }
// upperCase('javascript');  // call
// function lowerCase (str) {
//    return str.toLowerCase();
// }
// const result = lowerCase('javascript');
// console.log(result);

// Arguments Object In Function  🚀😈
// function add() {
//    if(arguments.length == 0) {
//       console.log("no agrument paas");
//    }else {
//       let sum = 0;
//       for(let i = 0; i<arguments.length; i++) {
//          sum = sum + arguments[i];
//          // sum+=arguments[i];
//       }
//       console.log(sum);
//    }
// }
// add(5,5,6,7);  // call

// Global Variable and Local Variable

// let fruit = "mango";   // global variable
// function sum () {
//    let result = 22;  // local variable
//    console.log(fruit);
// }
// // console.log(fruit);
// // console.log(result); 
// sum();

//  18 AUGUST 2022 🚀 😃 4:00 PM ⏲️

// Default Parameter 🚀
// function findArea(width, height) {
//    height =  height === undefined ? 1 : height;
//     const area = width * height;
//     return area;
// }
// const area = findArea(10,20);
// console.log(area);

// Anonymous Function 🚀
// let show = function () {
//     console.log("hello");
// }
// show(); // call

// 1 sec = 1000 mili sec
// setTimeout(function () {
//         console.log("hello");
//     }, 3000);

// Immediately Invoked Function 
// function show1 () {
//     console.log("javascript1");
// }
// show1();

// (function () {
//     console.log("javascript");
// })(); // call

// let msg = "hello js";
// function show() {
//     console.log(msg);
// }
// show();

// Arrow Function 🚀
// function sum (a, b) {
//     return a+b;
// }
// sum(2,3);

// let sum1 = (a, b) => {
//     return a + b;
// }
// console.log(sum1(5,5));

let sum1 = (a, b) => a + b;
console.log(sum1(5,5));


