const data = []

async function getData() {
    await fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(json => data.push(json))
}

async function initApp() {
    await getData()

    // console.log(data)

    compareCharacter(data)
        // sharedEpisodes(data)
}

initApp()


//el primero en el array es al que se van a comparar (recibe ids)
async function compareCharacter(characterArray) {

    const aux = []
    const comparedArray = [];
    await characterArray[0].results.forEach(mainCharacter => {


        characterArray[0].results.forEach(secondaryCharacter => {
            console.log("Comparando " + mainCharacter.name + " con " + secondaryCharacter.name)

            if (mainCharacter.name != secondaryCharacter.name) {
                mainCharacter.episode.forEach(episode => {
                    comparedArray.push({
                        character: mainCharacter.name,
                        otherCharacter: secondaryCharacter.name,
                        episodes: secondaryCharacter.episode.filter(secondayCharacterEpisode => secondayCharacterEpisode == episode).flat()
                    })



                });
            }
            // console.log(comparedArray)
            console.log(comparedArray)
            aux.push({
                mainName: mainCharacter.name,
                secondaryName: secondaryCharacter.name,
                episodes: comparedArray
            });
            // console.log(character)
            // console.log(aux)
            comparedArray.map(element => comparedArray.pop());
        });





    });

}

function asd(auxiliar) {
    const comparedArray = []

    auxiliar.forEach(character => {
        // console.log(character)
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