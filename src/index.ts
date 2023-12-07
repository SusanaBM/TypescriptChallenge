import { getAllCharacters, saveAllCharacters } from "./services/character-services";

getAllCharacters()
    .then(characters => saveAllCharacters(characters))
    .catch(error => console.error(error))
    .finally(() => console.log('Fin de getAllCharacters'));