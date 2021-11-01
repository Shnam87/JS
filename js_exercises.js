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
document.querySelector(".exercis5").textContent= "Resultat = "+ calculate2Num(3,5)

// document.querySelector(".summa").textContent= "Resultat = "+ calculate2Num(3,5)

const summan= document.querySelector(".summa")
summan.textContent= "Resultat = "+ calculate2Num(3,7)

// Övning 5 =
