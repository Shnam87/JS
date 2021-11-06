// Övning 1 =
var a= 4;
var b= 6;
console.log(a+b);
/* Eller */
function add2Numbers(a, b) {
    console.log(a+b)
}
add2Numbers(4,8);

// Övning 2 =
var lista = [1,2,3,4,5,6,7,8,9,10]

/* En enkel sätt att filtrera udda tal på en sorterd lista */
for (let i = 0; i < lista.length; i+=2) {
    console.log(lista[i])    
}

// lista = lista.filter( e => e%2).concat(lista.filter(e => e%2 === 0));

/* En bättre sätt */
for (let i = 0; i < lista.length; i++) {
    if (lista[i]%2==0) {
        console.log(lista[i], "är en Jämn tal")
    } else {
        console.log(lista[i], "är en udd tal")
    }
}
// Övning 3 =
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
}
/* Eller */
lista.map((e)=>console.log(e))

// Övning 4 =
function calculate2Num(a, b) {
    return a+b
}
console.log(calculate2Num(3,5))

// Övning 4.1 =
document.querySelector(".exercis4B").textContent= "Resultat = "+ calculate2Num(3,5)

// document.querySelector(".summa").textContent= "Resultat = "+ calculate2Num(3,5)

const summan= document.querySelector(".summa")
summan.textContent= "Resultat = "+ calculate2Num(3,7)

// En dynamiskt version av övning 4 =
function summera(e) {
    e.preventDefault();

    let inputOne= document.querySelector("#num1").value;
    let inputTwo= document.querySelector("#num2").value;
    let summa= Number(inputOne)+Number(inputTwo);

    const p= document.querySelector("#summan")
    p.textContent = summa
}
const button= document.querySelector(".summera")
button.addEventListener("click", summera)

// Övning 5 =
const funExp = function (str) {
    console.log(str)
    return str
}
funExp("Hello there");

// Övning 6 =
function stringToArray(str) {
    console.log(str.split(""))
    return str.split("")
}
stringToArray("Rakib");

/*
let r = "Rakib";
function split() {
    console.log(r.split(""))
}
split()
console.log(r.split("").reverse())
console.log(r.split("").reverse().join(""))
console.log(r.split("").join(""))
*/

// Övning 7 =
// 3 funktioner: en för att lägga till, en för att ta bort en i taget och en för att rensa hela listan
function addToShopping(e) {
    e.preventDefault();

    let text= document.querySelector("#addShopping").value
  //  console.log(text)
    const newEntry= document.createElement("li")
    newEntry.textContent=text
    const shoppingList= document.querySelector(".shoppingList")
    shoppingList.appendChild(newEntry)
}
document.querySelector("#adding").addEventListener("click", addToShopping)

function removeFromShopping(e) {
    e.preventDefault();

    var p= document.querySelector(".shoppingList")
    var entry= document.querySelector("li")
    p.removeChild(entry)
}
document.querySelector("#removing").addEventListener("click", removeFromShopping)

function clearShopping(e) {
    e.preventDefault();

    var p= document.querySelector(".shoppingList")
    var entry= document.querySelector("li")
    p.remove(entry)
}
document.querySelector("#clearAll").addEventListener("click", clearShopping)
