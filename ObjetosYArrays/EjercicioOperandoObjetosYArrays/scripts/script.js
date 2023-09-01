const persona = {
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
console.log(persona.nombre)
persona.edad = 22;
console.log(persona.edad)
persona.segundoNombre = "Ignacio";
console.log(persona.segundoNombre)
delete persona.deporteFavorito;
console.log(persona)

const paises = ["Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Ecuador", "Guyana", "Perú", "Uruguay", "Venezuela"];
//                  0           1           2       3           4           5           6       7       8           9                  
//indices de 0 a 9, length de 10

console.log(paises);
paises.pop();
console.log(paises);
paises.push("Curazao");
console.log(paises);
paises.shift();
console.log(paises);
paises.unshift("Argentina");
console.log(paises);
console.log(paises.indexOf("Colombia"));
console.log(paises.includes("Brasil"));

console.log(paises.toString());

console.log(paises.join("//"));

const otrosPaises = ["Estados Unidos", "Canada"];

console.log(paises.concat(otrosPaises));