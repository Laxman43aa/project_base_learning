/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

function getadjactive() {
    let rand = Math.floor(Math.random() * 3);
    if(rand === 0) return "crazy";
    else if(rand === 1) return "amazing";
    else return "fire";
  
}
function getShopName() {
    let rand = Math.floor(Math.random() * 3);
    if(rand === 0) return "engine";
    else if(rand === 1) return "foods";
    else return "garments";
}

function getAnotherWord() {
    let rand = Math.floor(Math.random() * 3);
    if(rand === 0) return "bros";
    else if(rand === 1) return "limited";
    else return "hub";
}

function generateBusinessName() {
    let adjective = getadjactive();
    let shopName = getShopName();
    let anotherWord = getAnotherWord();
    return `${adjective} ${shopName} ${anotherWord}`;
}

for(let i = 0; i < 10; i++) {
    console.log(generateBusinessName());
}