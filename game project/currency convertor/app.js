const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-07-17/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const from = document.querySelector(".from select");
const to = document.querySelector(".to select");
const msg = document.querySelector(".msg");


for(let select of dropdowns){
    for (currCode in countryList) {
            let newOption = document.createElement("option");
            newOption.innerText = currCode;
            newOption.value = currCode;
            if(select.name === "from" && currCode ==="USD"){
                newOption.selected = "selected";
            }else if(select.name === "to" && currCode ==="INR"){
                newOption.selected = "selected";
            }
            select.append(newOption);
    }

   select.addEventListener("change",(evt)=>{
    updateFlag(evt.target);
   })
}
const updateExchangeRate = async ()=>{
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1; 
        amount.value ="1";
    }
    //  console.log(fromCurr.value , toCurr.value);
    const URL = `${BASE_URL}/${from.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data [from.value.toLowerCase()][to.value.toLowerCase()];

    let finalAmount = amtVal * rate ;
    msg.innerText = `${amtVal} ${from.value} = ${finalAmount} ${to.value}`;
}

const updateFlag = (element)=>{
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
});

  window.addEventListener("load",()=>{
  updateExchangeRate();
})

