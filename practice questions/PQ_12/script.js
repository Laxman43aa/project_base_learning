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
// promise work 

// function asyncFunc1(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("data1");
//             resolve("success");
//         },4000)
//     })
// }
// function asyncFunc2(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("data2");
//             resolve("success");
//         },4000)
//     })
// }
// //  promise chain work..
// console.log("fatch data1 .....");
//  asyncFunc1().then((res)=>{
//     console.log("fatch data2 ....");
//      asyncFunc2().then((res)=>{
//     })
// }
// )
// second example of promise chain work
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         // 2s
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     })
// }
// promise chain example 
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then((res) => {
//         console.log(res);
//     })

// })

// or 

// promise chain 
// console.log("getting data1 ...");
// getData(1)
// .then((res) => {
//     console.log("getting data2 ...");
//     return getData(2);
// }).then((res)=>{
//     console.log("getting data3 ...");
//     return getData(3);
// }).then((res)=>{
//     console.log(res)
// })

// async await
// async function hello(){
//     console.log("hello");
// }

// function api(){
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("weather data");
//             resolve(200);
//         },2000);
//     })
// }

// async function getWeatherData(){
//     await api(); //1st call
//     await api(); //2nd call
// }

function getData(dataId) {
    return new Promise((resolve, reject) => {
        // 2s
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    })
}
// Async-await 
async function getAllData(){
    console.log("getting data1 ...");
    await getData(1);
    console.log("getting data2 ...");
    await getData(2);
    console.log("getting data3 ...");
    await getData(3);
}
// IIFE : Immedietly invoked function expresion (func)();
(async function getAllData(){
    console.log("getting data1 ...");
    await getData(1);
    console.log("getting data2 ...");
    await getData(2);
    console.log("getting data3 ...");
    await getData(3);
})();
