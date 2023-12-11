import { getApiAllCharacters, saveAllCharacters } from "./services/character-services";
import { ListCharactersTable } from './components/tableCharactersCreate';
import { FormCharacterCreate } from './components/formCharacterCreate';

getApiAllCharacters()
    .then(characters => saveAllCharacters(characters))
    .catch(error => console.error(error))
    .finally(() => console.log('Fin de getAllCharacters'));

let listCharactersTable = ListCharactersTable();

FormCharacterCreate();

var listCharactersDiv = document.getElementById("listCharactersTable");
listCharactersDiv?.appendChild(listCharactersTable);