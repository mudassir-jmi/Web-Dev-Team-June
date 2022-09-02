// Object is a real world entity 🚀
// you can access object in two ways 👇
// 1. Dot Notation 👇
// let person = {
//     name : "xyz",
//     age : 20,
//     roll: 12,
// };
// person.class = 10 // add item in object
// delete person.age;  // delete item in object
// console.log(person);
// 2. Array Notation 👇
// console.log(person["age"]);
// itrate in object or use of for in loop 👇
// for(let key in person ) {
//    console.log(key + ":" +person[key]);
// }
// Methods In Objects 👇
// let person = {
//     name : "xyz",
//     age : 20,
//     roll: 12,
// };
// person.greet = function () {
//     console.log("good evening");
// }

// person.greet(); // call 
// 2nd way
// function show() {
//   console.log("hello");
// }

// person.greet = show;
// person.greet();

// ES6 🚀 👇
// let person = {
//     name : "xyz",
//     age : 20,
//     roll: 12,
//     sayHello() {
//         console.log("hello world");
//     }
// };
// person.sayHello(); // call

// 02/09/2022............Friday 😸

// This Keyword 🚀 👇 
// this keyword refers to the object it belongs to. 👈
// this keyword use within the object instead of object name 👈

// let person = {
//     fullName : "Akhter",
//     age: 20,
//     display() {
//        console.log('Hello i am ' 
//        +this.fullName 
//        +' and i have a ' 
//        + cloth.brand + " cloth");
//     //    console.log(this);
//     }
// }

// let cloth = {
//     brand: 'sparkey',
//     type: 'Jeans',
// }
// person.display();  // call
// Math Object 🚀 👇
// Home Work
// Date Object 🚀 👇
// let x = new Date();
// console.log(x);  // current date
// console.log(x.getMonth());
// console.log(x.getFullYear());
// console.log(x.getHours());
// console.log(x.getMinutes());
// console.log(x.getDay());

// New Keyword 🚀 👇
// let person = {
//     name: "xyz",
//     age : 20,
// }
// console.log(person.name);
let person = new Object();
person.name = "Akhter";
person.age = 20;
person.roll = 12;
console.log(`${person.name}`);


