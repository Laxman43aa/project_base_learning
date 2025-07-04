
// let button = document.getElementById("myid");
// console.dir(button);

// let headings = document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(headings);

// let paras= document.getElementsByTagName("p");
// console.dir(paras);
// console.log(paras);

// let firstPara = document.querySelector("p");
// console.dir(firstPara);

// let allParas = document.querySelectorAll("p");
// console.dir(allParas);
// let button = document.querySelector("#myid");
// console.dir(button);

// let allhead = document.querySelectorAll(".myclass");
// console.dir(allhead);

// console.dir(document.body.firstChild);

// let div = document.querySelector("div");
// console.dir(div);   
// let heading = document.querySelector("h1");
// console.dir(heading);

// que1
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from apna collage student";

// que2

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = " new unique text 1";
// divs[1].innerText = "new unique text 2";
// divs[2].innerText = "new unique text 3";

// or 
let divs = document.querySelectorAll(".box");
console.dir(divs);
let idx = 1;
for ( div of divs ){
    div.innerText = `new unique text ${idx}`;
    idx++
} 
  


