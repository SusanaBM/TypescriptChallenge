import { Character } from '../interfaces/character';
import { AddRowTableCharacters } from './tableCharactersAddRow';

export const NewRecordTableCharacters = (character: Character): void => {

    const tblBody = document.querySelector("tbody");
    tblBody?.appendChild(AddRowTableCharacters(character));
}
