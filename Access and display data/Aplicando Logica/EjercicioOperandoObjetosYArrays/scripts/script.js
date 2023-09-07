const Persona = {
        nombre: "Daniel",
        apellido: "Ceriana",
        estudia: true,
        trabaja: false,
        edad: 21,
        pasatiempos: ["jugar", "escuchar musica"],
        deporteFavorito: "handball",
        vivienda: {
            tipo: "casa",
            habitaciones: 4,
            patio: true
        },
        mascotas: "perro",
        mascota: {
            nombre: "Sami",
            edad: 2,
            comidasFavoritas: ["pollo", "snacks"],
        }


    }
    // console.log(persona.nombre)
    // persona.edad = 22;
    // console.log(persona.edad)
    // persona.segundoNombre = "Ignacio";
    // console.log(persona.segundoNombre)
    // delete persona.deporteFavorito;
    // console.log(persona)

const paises = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Guyana", "Perú", "Uruguay", "Venezuela"];
//                  0           1           2       3           4           5           6       7       8           9                  
//indices de 0 a 9, length de 10

// console.log(paises);
// paises.pop();
// console.log(paises);
// paises.push("Curazao");
// console.log(paises);
// paises.shift();
// console.log(paises);
// paises.unshift("Argentina");
// console.log(paises);
// console.log(paises.indexOf("Colombia"));
// console.log(paises.includes("Brasil"));

// console.log(paises.toString());

// console.log(paises.join("//"));

// const otrosPaises = ["Estados Unidos", "Canada"];

// console.log(paises.concat(otrosPaises));


// console.log("---------------");

// for (let i = 0; i < paises.length; i++) {
//     console.log(paises[i])
// }
// console.log("---------------");

// for (const prop in persona) {
//     console.log(prop + ": " + persona[prop]);
// }

// console.log("---------------");

// let i = paises.length;
// while (i > 0) {
//     //primero resta para no tener un undefined
//     i--;
//     console.log(paises[i])
// }


function PresentarPersona(persona) {
    console.log(`Hola, mi nombre es ${persona.nombre} ${persona.apellido}, tengo ${persona.edad} años, mi deporte favorito es ${persona.deporteFavorito} y tengo un ${persona.mascotas}`)
}

PresentarPersona(Persona);


//devuelve el 21% del valor 
function calcularIva(precio) {

    return precio * 0.21;
}

console.log("El iva de $100 es: $" +
    calcularIva(100));


const arrayDeNumeros = [1, 2, 6, 2, 4, 3];


const result = arrayDeNumeros.reduce((acumulador, numero) =>
    acumulador + numero
)
console.log(result)


const array1 = [1, 2, 3, 4];

const sumWithInitial = array1.reduce((accumulator, currentValue) =>
    accumulator + currentValue);

console.log(sumWithInitial);


function chequearHabilitacionConducir(edad) {

    if (edad >= 18) {
        console.log("Ya podes conducir");
    } else {
        console.log("Todavia no podes conducir");

    }
}

chequearHabilitacionConducir(Persona.edad);