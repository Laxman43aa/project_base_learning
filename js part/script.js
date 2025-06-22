console.log("Hello, World!");

var a = 5;
var b = 10;
console.log( a + b);

// const a1 = 6;
// a1 = a1+1;
// console.log(a);

// This will throw an error because a1 is a constant

{
    let a = 10;
    console.log(a); // 10
}
console.log(a); // 5, because 'a' in the block scope does not affect the outer 'a'

let x = 10;
let y = "laxman";
const z = true;
let p= null;
let q = undefined;
let pi = 3.14;
console.log(x, y, z, p, q, pi); // 10 "laxman" true null undefined 3.14
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof pi); // 10 "laxman" true null undefined 3.14

let o ={
    "name": "laxman",
    "age": 25,
    "isStudent": true,
}
console.log(o); // { name: 'laxman', age: 25, isStudent: true }

o.age= 28;
console.log(o); // { name: 'laxman', age: 28, isStudent: true }
