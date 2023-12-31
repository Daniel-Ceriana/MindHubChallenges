const data = []

async function getData() {
    await fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(json => data.push(json))
}

async function initApp() {
    await getData()

    console.log(await compareCharacter(data))


}

initApp()

async function compareCharacter(characterArray) {
    const normalizedArray = [];
    //"mainCharacter" = el personaje al que se van a comparar los "secondaryCharacter"
    await characterArray[0].results.forEach(async mainCharacter => {
        const comparedArray = [];

        await characterArray[0].results.forEach(secondaryCharacter => {

            if (mainCharacter.name != secondaryCharacter.name) {
                const aux = []

                mainCharacter.episode.forEach(episode => {
                    aux.push(secondaryCharacter.episode.filter(secondayCharacterEpisode => secondayCharacterEpisode == episode))
                });

                try {
                    comparedArray.push({
                        otherCharacterName: secondaryCharacter.name,
                        episodesShared: aux.flat().map(async(urlEpisode) => urlEpisode = await getEpisodeName(urlEpisode))

                    })
                } catch (error) {
                    console.log(error)
                }
            }

        });
        normalizedArray.push({
            character: mainCharacter.name,
            otherCharacters: comparedArray
        })
    });
    return normalizedArray
}

async function getEpisodeName(urlEpisode) {
    if (typeof urlEpisode != undefined && typeof urlEpisode != null) {
        try {
            const res = await fetch(urlEpisode);
            const data = await res.json();
            return data.name;
        } catch (error) {
            console.log(error);
        }
    }
}