//functions 

// function mul(a, b) {
//     return a * b;
// }

// const  m = mul(2, 3);
// console.log(m);

// arrow version of mul function 
const mulArrow = (a, b) =>{
    return a * b;
};
// const mArrow = mulArrow(2, 3);
// console.log(mArrow);

// que1

// function findvowels(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i].toLowerCase())) {
//             count++;
//         }
//     }
//     return count;
   
// }
// console.log(findvowels("Hello World"));

// or 
// function countvowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if ( 'a'=== char.toLowerCase() || 
//              'e' === char.toLowerCase() || 
//              'i' === char.toLowerCase() || 
//              'o' === char.toLowerCase() || 
//              'u' === char.toLowerCase()) {
//             count++;
//         }
        
//     }
//     console.log(count);
// }

// que2 using arrow function
// const countvowels = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if ('a' === char.toLowerCase() || 
//             'e' === char.toLowerCase() || 
//             'i' === char.toLowerCase() || 
//             'o' === char.toLowerCase() || 
//             'u' === char.toLowerCase()) {
//             count++;
//         }
//     }
//     return count;
// }

// foreach method ya loop
// let arr = ["pune", "mumbai", "delhi", "bangalore"];
// arr.forEach((val , idx, arr) => {
//     console.log(val.toLocaleUpperCase(), idx, arr);
// });
// que3

// let squre =(num) =>{
//     console.log(num * num);
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.forEach(squre);
// or
// let nums = [ 2, 3, 4, 5, 6, 7, 8, 9, 10];
// nums.forEach((num) => {
//     console.log(num * num);
    
// });

// map method
// let nums = [ 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newArr=nums.map((val) => {
//     return val;
// });
// console.log(newArr);


// fillter method
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);



// reduce method
// const arr = [1 , 2 , 3 , 4];
// let output = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(output)

// find the max number in array using reduce method
// const arr = [10 , 24 , 34 , 4];
// let output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output)

// que4
// const marks = [95, 67, 86, 75, 95 , 97];
// let stuMarks = marks.filter((val) => {
//     return val >= 90;
// });
// console.log(stuMarks);


// que5
let n = prompt("enter the number to print the array");

let arr = [];
for (let i = 0; i <= n; i++) {
    arr[i - 1] = i; //1(0) 2(1) 3(2) 4(3) 5(4);
}
console.log(arr);

let Sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log("sum =", Sum);

let factorial = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("factorial =", factorial);