// API calls
// using fetch api get random facts 
const URL ="https://uselessfacts.jsph.pl/random.json";
const factPara = document.querySelector("#fact");
const btn  = document.querySelector("#btn");

const getFacts =  async () =>{
    console.log("getting data ......");
    let response = await fetch(URL);
console.log(response);// not readable on json format
let data= await response.json(); //then we can call .json for converting readable formate
// console.log(data.text);
factPara.innerText = data.text ;
};

// using promise chain
// function getFacts(){
//     fetch(URL).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data.text ;
// });

// }
btn.addEventListener("click", getFacts);
