// let marks = [ 85 , 97 , 44 , 37 , 76 , 60];
// let total = 0;
// let average = 0;
// // Calculate total and average marks
// console.log("Marks: " + marks);
// for (let i = 0; i < marks.length; i++) {
//     total += marks[i];
// }
// console.log("Total marks: " + total);
// average = total / marks.length;
// console.log("Average marks: " + average);

// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (const el of marks) {
//     sum += el;
// }
// let average = sum / marks.length;
// console.log(`the avarage of the marks is ${average}`);


// qe2 
// print the arr after 10% discount

// let items = [ 250, 645, 300, 900, 50];
// for (let i = 0; i < items.length; i++) {
//    let offer = items[i] / 10;
//     items[i] = items[i] - offer;
// }
// console.log("Items after 10% discount: " + items);

// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (const val of items) {
//     let offer = val / 10;
//     items[i] = items[i]- offer;
//     console.log(`Item after 10% discount: ${items[i]}`);
//     i++;
    
// }

// qe3

let companies = ["Bloomberg", "Microsoft", "Uber", "Googel", "IBM", "Netflix"];

// remove the first company
// companies.shift();
// console.log("Companies after removing the first one: " + companies);
// remove uber and add ola its place
companies.splice(2, 1, "Ola");
console.log("Companies after replacing Uber with Ola: " + companies);
// add amazon at the end
companies.push("Amazon");
console.log("Companies after adding Amazon at the end: " + companies);