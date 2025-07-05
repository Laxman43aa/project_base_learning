// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));
// let para = document.querySelector("p");
// console.log(para.setAttribute("class" , "newClass"));

// let div = document.querySelector("div");

// div.style.backgroundColor = "yellow";
// div.style.fontSize = "26px";
// div.style.color = "white";
// div.style.visibility = "hidden";

// div.innerText = "Hello!";

// let newbtn = document.createElement("button");
// newbtn.innerText = "Click Me!";
// console.log(newbtn);

// let div = document.querySelector("div");
// div.append(newbtn);
// let div = document.querySelector("div");
// div.prepend(newbtn);
// let div = document.querySelector("div");
// div.before(newbtn);
// let div = document.querySelector("div");
// div.after(newbtn);
// let p = document.querySelector("p");
// p.after(newbtn);

// let newheading = document.createElement("h1");
// newheading.innerHTML = "<i>This is a new heading</i>";

// document.body.prepend(newheading);
// or
// document.querySelector("body").prepend(newheading);

// let para = document.querySelector("p");
// para.remove();

// newheading.remove();

// que1
let newbtn = document.createElement("button");
newbtn.innerText = "Click Me!";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

document.querySelector("body").prepend(newbtn);

// que2
let para = document.querySelector("p");

para.classList.add("newClass");
para.style.backgroundColor = "green";