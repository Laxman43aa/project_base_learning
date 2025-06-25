// javascript strings
console.log("this is a string");

let a = "laxman";
console.log(a);
console.log(a.length);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

// template literals
let real_name = "laxman";
let friend_name = "subodh";
console.log("My name is " + real_name + " and my friend's name is " + friend_name);
console.log(`My name is ${real_name} and my friend's name is ${friend_name}`);
// string properties and methods
 let b = "dushyant";
console.log(b.length);
console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.slice(0, 3)); 
console.log(b.slice(3, 6)); 
console.log(b.slice(3)); 
console.log(b.slice(-3)); 
console.log(b.slice(-6, -3)); 

console.log(b.replace("du","tu")); // returns the index of the first occurrence of the specified value

console.log(b.concat(a ,"kapil","shubham")); // joins two or more strings and returns a new string