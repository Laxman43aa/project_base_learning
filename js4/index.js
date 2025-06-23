// functions 
function nice(name) { 

console.log("hay " + name + " your are very nice and good");
console.log("hay " + name + " your  are very handsome");
console.log("hay " + name + " your tshirt is very nice");
console.log("hay " + name + " your hair style is good");
console.log("hay " + name + " your are very good in coding");
}
nice("laxman");

function sum(a, b , c=2) {
    // console.log(a + b);
    return a + b + c;
}

 result1 = sum(5, 10);
 result2= sum(20, 10);
 result3= sum(51, 10, 1);

 console.log("The sum is: " + result1);
 console.log("The sum is: " + result2);
 console.log("The sum is: " + result3);

//  this is a arrow function
const fanc1 = (x)=>{
    console.log("The value of x is: " + x);
}
fanc1(10);
fanc1(20);
fanc1(30);