// function hello(){
//     console.log("hello");
// }
// setTimeout(hello , 4000)// 4sec = 4000ms

// using arrow function
// setTimeout(()=>{
//     console.log("hello");
// },4000);//timeout

// Async
// console.log("one");
// console.log("two");

// setTimeout(()=>{
//     console.log("hello");
// },4000);//timeout

// console.log("three");
// console.log("four");

// callbacks
// function sum(a,b){
//     console.log( a + b);

// }
// function calculator(a,b,sumCallback){
//     sumCallback(a,b);

// }
// // calculator(1,2,sum);
// calculator(4,2,(a,b)=>{
//     console.log(a + b);
// });

// const hello = ()=>{
//     console.log("hello");
// }
// setTimeout(hello , 3000);

// callbacks hell

// function getData(dataId , getNextData){
//     // 2s
//     setTimeout(()=>{
//         console.log("data",dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }
// callback hell
// getData(1,()=>{
//     console.log("getting data2 ...");
//     getData(2,()=>{
//          console.log("getting data3...");
//         getData(3,()=>{
//             console.log("getting data4...");
//             getData(4)
//         })
//     });
// })

// promises in  js 

// let promise = new Promise((resolve,reject)=>{
//     console.log(" i am a promise");
//     resolve("succses");
//     // reject("some error ");
// });
 const getPromise = ()=>{
  return new Promise((resolve,reject)=>{
        console.log(" i am a promise");
        resolve("succses");
        // reject(" network error");
    })
 }
 let promise = getPromise();
 promise.then((res)=>{
    console.log("promise fulfiled",res)
 })
promise.catch((err)=>{
    console.log("rejected",err);
})

// function getData(dataId , getNextData){
//     return new Promise((resolve , reject)=>{
//     // 2s
//     setTimeout(()=>{
//         console.log("data",dataId);
//         resolve("success");
//         if(getNextData){
//             getNextData();
//         }
//     },5000);
// })
// }
