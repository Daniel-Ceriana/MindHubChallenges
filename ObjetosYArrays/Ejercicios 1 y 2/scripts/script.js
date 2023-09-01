var nombre = "Daniel"
console.log(nombre)
var apellido = "Ceriana"
console.log(apellido)
var estudia = true;
if (estudia) {
    console.log("Estudio")
} else {
    console.log("No estudio")
}
var trabaja = false;
if (trabaja) {
    console.log("trabaja")
} else {
    console.log("No trabaja")
}

var edad = 22;
console.log("Tengo " + edad + " años")

const pasatiempos = ["jugar", "escuchar musica"];
console.log("Pasatiempos: " + pasatiempos)

var deporteFavorito = "handball";
console.log(deporteFavorito)
const vivienda = {
    tipo: "casa",
    habitaciones: 4,
    patio: true
}
console.log(vivienda)
const mascotas = "perro";
switch (mascotas) {
    case "perro":

        console.log("Tengo perro");
        break;
    case "gato":

        console.log("Tengo gato");
    default:
        console.log("No tengo mascotas");
        break;
}
const mascota = {
    nombre: "Sami",
    edad: 2,
    comidasFavoritas: ["pollo", "snacks"],
};
console.log(mascota)