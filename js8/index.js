let arr = [ 1 , 2 , 3 , 4 , 5];

console.log(arr);
console.log(arr.length);
console.log(arr[0])
arr[0] = 10;
console.log(arr[0]);
console.log(arr);
console.log(arr.toString());
console.log(arr.join(' and '));
// console.log(arr.indexOf(3));

let a = [1, 2, 3];
console.log(a.pop());
console.log(a);
console.log(a.push(4));
console.log(a.push("laxman"));
console.log(a);
console.log(a.shift());
console.log(a);
console.log(a.unshift("jack"));
console.log(a);
console.log(delete[3]);
console.log(a);


let x = [ 1 , 2 , 3];
let y = [ 4 , 5 , 6];
let z = [ 7 , 8 , 9];
console.log(x.concat(y,z));
// console.log(x);

let a1 = [ 7 , 9 , 8];
console.log(a1.sort());
 
let numbers = [ 1 , 2 , 3 , 4, 5 ,];
console.log(numbers.splice(1,2));
console.log(numbers)
console.log(numbers.splice(2, 1 , 222, 333));
console.log(numbers)

let num1 = [ 1 , 2 , 3 , 4 , 5];
console.log(num1.slice(0,5))
console.log(num1)