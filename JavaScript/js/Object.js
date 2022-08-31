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
let person = {
    name : "xyz",
    age : 20,
    roll: 12,
    sayHello() {
        console.log("hello world");
    }
};

person.sayHello(); // call



