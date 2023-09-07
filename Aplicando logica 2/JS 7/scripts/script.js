const datos = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda",
    "Arabia Saudita", "Argelia", "Argentina", "Armenia"
]

const datosDisplay = document.getElementById("array");
const buttons = document.querySelectorAll("button")
const buttonsLength = buttons.length;
for (let i = 0; i < buttonsLength; i++) {
    buttons[i].addEventListener("click", (e) => {
        switch (e.target.id) {
            case "map":

                break;
            case "for-each":
                datos.forEach(dato => { datosDisplay.innerHTML += `${dato}, ` })
                break;
            case "filter":

                break;
            case "reduce":

                break;
            case "find":

                break;
            case "find-index":

                break;
            case "some":

                break;
            case "sort":

                break;

            default:
                break;
        }
    })
}