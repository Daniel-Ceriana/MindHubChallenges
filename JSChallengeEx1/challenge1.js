const data = []

async function getData() {
    await fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(json => data.push(json))
}

async function initApp() {
    await getData()

    // console.log(data)

    compareCharacter([1, 2, 3, 7, 9])
        // sharedEpisodes(data)
}

initApp()


//el primero en el array es al que se van a comparar (recibe ids)
function compareCharacter(arrayDeCharacters) {
    const display = DisplayController();

    //consigue al personaje principal a ser comparado
    const mainCharacter = data[0].results.filter(character => character.id == arrayDeCharacters[0])
    const otherCharacters = [];
    let firstElement = true;

    //crea un array con los personajes a comprarar quitando al principal
    arrayDeCharacters.forEach(characterID => {
        if (!firstElement) {
            otherCharacters.push(data[0].results.filter(character => character.id == characterID));
        } else {
            firstElement = false;
        }

    });
    console.log(otherCharacters);


    //mostrar personaje principal
    display.displayMainCharacter(mainCharacter[0])

    //comparacion y muestra de otros personajes
    otherCharacters.forEach(characterObject => {
        console.log(characterObject[0].name);
        // console.log()
        const sharedEpisodes = [];
        characterObject[0].episode.forEach(episode => {
            mainCharacter[0].episode.forEach(mainEpisode => {
                if (mainEpisode == episode) {
                    sharedEpisodes.push(episode)
                } else {

                    // console.log(mainEpisode)
                }
            })


        });
        console.log(sharedEpisodes)
        display.displaySecondaryCharacter(characterObject[0], sharedEpisodes.length)
        sharedEpisodes.forEach(async(episode) => {
            display.displayEpisodesTogether(characterObject[0].id, await getEpisodeName(episode));
        });

        //al final de todo se ejecuta el displayController


        // display.displayMainCharacter(mainCharacter[0])
    });


}

async function getEpisodeName(urlEpisode) {
    let res;
    await fetch(urlEpisode)
        .then(response => response.json())
        .then(json => res = json.name);
    console.log(res);
    return res;
}

// function sharedEpisodes()

const DisplayController = () => {
    const display = document.querySelector("main");

    function displayMainCharacter(character) {
        // display.textContent = "";
        const article = document.createElement('article');
        article.setAttribute('class', 'character');
        article.innerHTML = `
        <section class="card">
        <h2>${character.name}</h2>
        <img src="${character.image}", alt="Character ${character.name} from Rick and Morty">
        </section>
        `
        display.appendChild(article);
    }

    function displaySecondaryCharacter(character, numberOfEpisodes) {
        // display.textContent = "";
        const article = document.createElement('article');
        article.setAttribute('class', 'character');
        article.innerHTML = `
        <section class="card--character__compare">
        <article>
        <h2>${character.name}</h2>
        <img src="${character.image}", alt="Character ${character.name} from Rick and Morty">
        <p>Episodes together: ${numberOfEpisodes}</p>
        </article>

        <article class="display--episodes" id="display-${character.id}">


        </article>
        </section>



    `
        display.appendChild(article);
    }

    function displayEpisodesTogether(id, episodeName) {
        const displayEpisodes = document.querySelector(`#display-${id}`)
            // display.textContent = "";
        const article = document.createElement('article');


        article.setAttribute('class', 'character');
        article.innerHTML = `
        <section class="episode-name-minicard">
        <p>${episodeName}</p>
        </section>



    `
        displayEpisodes.appendChild(article);

    }




    return { displayMainCharacter, displaySecondaryCharacter, displayEpisodesTogether }
}