// let btn = document.querySelector("#btn1");
// btn.onclick = (e) => {
    // console.log("btn 1 was clicked");
    // let a =  25 ;
    // a++;
    // console.log(a);
//     console.log(e);
//     console.log("btn 1 was clicked");
//     console.log(e.target);
//     console.log(e.type);
//     console.log(e.clientx, e.clientY);
// }
// btn.addEventListener("click", () => {
//     console.log("btn 1 was clicked - handler1");
    
// });
// btn.addEventListener("click", () => {
//     console.log("btn 1 was clicked - handler2");
    
// });
// const handler3 = () => {
//     console.log("btn 1 was clicked - handler3");   
// };
// btn.addEventListener("click", handler3);

// btn.addEventListener("click", () => {
//     console.log("btn 1 was clicked - handler4");
    
// });
// btn.removeEventListener("click", handler3);
    

// let box = document.querySelector(".box");
// box.onmouseover = (evt) => {
//     console.log("box was hovered");
//     box.style.backgroundColor = "red";
//     console.log(evt);
//     console.log("btn 1 was clicked");
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientx, e.clientY);
// }
// que1
// let modebtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currentMode = "light";
// modebtn.addEventListener("click", () => {
//     if (currentMode === "light"){
//         currentMode = "dark";
//         // document.querySelector("body").style.backgroundColor = "black";
//         body.classList.add("dark");
//         body.classList.remove("light");

//     }else{
//         currentMode = "light";
//         // document.querySelector("body").style.backgroundColor = "white";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }

//     console.log(currentMode);
// });

// self immplementing probelm
let hovered = document.querySelector(".box1");
let body = document.querySelector("body");
let currentbox = "small";
hovered.addEventListener("mouseover", () => {
    if (currentbox === "small") {
        currentbox = "large";
        hovered.classList.add("box2");
        hovered.classList.remove("box1");
    }else {
        currentbox = "small";
        hovered.classList.add("box1");
        hovered.classList.remove("box2");
    }

    console.log(currentbox);
});