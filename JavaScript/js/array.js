// 👉 Array are collection of data items 
// stored under a single name 🚀


// Declaration and Initialization 

let book1 = ['JavaScript', 'Python', 'Node js'];
// console.log(book);

// Get Element an Array
// console.log(book[1]);
// Find Length of an Array
// console.log(book.length);

// Add Element in End of the Array
// book.push('Html');
// console.log(book);

// Add Element in first of the Array
// book.unshift('css');
// console.log(book);

// Remove Element in End of the Array

// book.pop();
// console.log(book);

// Remove Element in first of the Array
// book.shift();
// console.log(book);

// Remove Element at any position of an Array

// book.splice(1,1);
// console.log(book);

// how to empty an Array
// book = [];
// book.length = 0;
// console.log(book);

// Find Position of an Array 
// let position = book.indexOf('css');
// console.log(position);

// split a text in Array
// let text = "This is JavaScript";
// let value = text.split(' ');
// console.log(value);

//  Join Function in Array
// let book = ['JavaScript', 'Python', 'Node js'];
// let value = book.join('_');
// console.log(value);

// Add Two Array
// let book = ['JavaScript', 'Python', 'Node js'];
// let book2 = ['css','hmtl'];
// let newBook = book.concat(book2);
// console.log(newBook);

// Sort an Array
// let num = [8, 2, 4, 6, 1, 5, 9, 3, 7];
// num.sort();
// console.log(num);

// Array through loop
const student = [
    {
        name: 'Max',
        payment: 100
    },

    {
        name: 'Hidayat',
        payment: 200
    },

    {
        name: 'Sajida',
        payment: 300
    },
]

// for(let i = 0; i < student.length; i++) {
//     student[i].payment = student[i].payment - 10;
//     console.log(student[i]);
// }

// forEach

// student.forEach((value) => {
//     value.payment = value.payment - 20;
//     console.log(student);
// })


// filter function

// const items = [
//    { name: 'pen', price: 10},
//    { name: 'book', price: 100},
//    { name: 'Tv', price: 1000},
// ]

// const filterItems = items.filter((item) => {
//     return item.price < 1000;
// })

// console.log(items);
// console.log(filterItems);

// map fucntion

// const items = [
//    { name: 'pen', price: 10},
//    { name: 'book', price: 100},
//    { name: 'Tv', price: 1000},
// ]

// const filterItems = items.map((item) => {
//     return item.name;
// })

// console.log(items);
// console.log(filterItems);

let book = ['math','chem', 'bio','phy'];
book.forEach(mybook);

function mybook(a) {
    console.log(a);
}

// mybook(); // call