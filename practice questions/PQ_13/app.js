const URL ="https://official-joke-api.appspot.com/random_joke";

const getFacts =  async () =>{
    console.log("getting data ......");
    let response = await fetch(URL);
console.log(response);
let data= await response.json();
console.log(data);

};