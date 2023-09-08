var texto = "            eStoy en El moduLo tres DEl curso de javAscrip      ";

const displayText = document.querySelector(".text");

let textoOrdenado = texto.trim().toLowerCase()
let primeraLetra = texto.trim().charAt(0).toUpperCase()


displayText.innerHTML = primeraLetra + textoOrdenado.slice(1, textoOrdenado.length).replace("javascrip", "JavaScript");

//---------------------------
var numerosEnString = "3,8,9,8.65,3.6965378,9"
const displayNumeroMax = document.querySelector(".max")
const displayNumeroMin = document.querySelector(".min")
const displayNumerosAscendente = document.querySelector(".ascendentes")
const displayNumerosDescendente = document.querySelector(".descendentes")

const numerosEnArray = numerosEnString.split(",");
const numerosFixed = []


// Para que como maximo tenga 2 decimales
numerosEnArray.forEach(numero => {
    numerosFixed.push(parseFloat(Number(numero).toFixed(2)))
});
console.log(numerosFixed)


//falta validar que no sean NaN antes de calcular
displayNumeroMax.innerHTML = numerosFixed.reduce((numeroAnterior, numeroActual) =>
    Math.max(Number(numeroAnterior), Number(numeroActual)))
displayNumeroMin.innerHTML = numerosFixed.reduce((numeroAnterior, numeroActual) =>
    Math.min(Number(numeroAnterior), Number(numeroActual)))




//Orden de Numeros--------------
displayNumerosAscendente.innerHTML = numerosFixed.sort((numeroAnterior, numeroActual) => {
    if (Number(numeroAnterior) > Number(numeroActual)) {
        return 1;
    }
    if (Number(numeroAnterior) < Number(numeroActual)) {
        return -1;
    }
})
displayNumerosDescendente.innerHTML = numerosFixed.sort((numeroAnterior, numeroActual) => {
    if (Number(numeroAnterior) > Number(numeroActual)) {
        return -1;
    }
    if (Number(numeroAnterior) < Number(numeroActual)) {
        return 1;
    }
})