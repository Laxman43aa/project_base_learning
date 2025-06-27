let arr = [ 1 , 2 , 4 , 5, 8];
// let newArr = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2);
    
// }

let newArr = arr.map((e)=>{
    return e**2;
})
// console.log(arr);
const graterthenseaven = (e)=>{
    if(e>7){
        return true;
    } 
        return false;
}
console.log(arr.filter(graterthenseaven));

let arr2 = [ 1 , 2, 3, 4, 5, 6];
const red = ( a , b)=>{
    return  a+b 
}
console.log(arr2.reduce(red));

// let a2 = "laxman";
console.log(Array.from("laxman"));
// console.log(a2);


