const paises = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda",
    "Arabia Saudita", "Argelia", "Argentina", "Armenia"
]
const numeros = [1, 2, 3, 4, 5, 6];

const paisesDisplay = document.getElementById("paises");
const numerosDisplay = document.getElementById("numeros");
const buttons = document.querySelectorAll("button")
const buttonsLength = buttons.length;
for (let i = 0; i < buttonsLength; i++) {
    buttons[i].addEventListener("click", (e) => {
        paisesDisplay.innerHTML = ""
        switch (e.target.id) {
            case "for-each":
                paises.forEach(dato => { paisesDisplay.innerHTML += `${dato}, ` })
                break;
            case "map":
                paisesDisplay.innerHTML = paises.map(dato => dato = dato.toUpperCase())
                break;
            case "filter":
                paisesDisplay.innerHTML = paises.filter(dato => dato.length < 9)
                break;
            case "reduce":
                numerosDisplay.innerHTML = numeros.reduce((datoPrevio, dato) => datoPrevio * dato);
                break;
            case "find":
                numerosDisplay.innerHTML = numeros.find(dato => dato > 5)
                break;
            case "find-index":
                const index = paises.findIndex(dato => dato.length > 13)
                paisesDisplay.innerHTML = `${paises[index]}: ${index} `
                break;
            case "some":
                paisesDisplay.innerHTML = paises.some(dato => dato === "Argentina")
                break;
            case "sort":
                paisesDisplay.innerHTML = paises.sort((datoA, datoB) => {
                    if (datoA > datoB) {
                        return -1;
                    }
                    if (datoA < datoB) {
                        return 1;
                    }
                    return 0
                })
                break;

            default:
                break;
        }
    })
}