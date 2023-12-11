import { Character } from '../interfaces';
import { getStorageCharacters } from '../services/character-services';
import { AddRowTableCharacters } from './tableCharactersAddRow';
import { SetHeaderTableCharacters } from './tableCharactersSetHeader';

export const ListCharactersTable = (): HTMLElement => {

    const data: Character[] = getStorageCharacters();

    // Header section
    let tblHeader = document.createElement("thead");
    tblHeader.appendChild(SetHeaderTableCharacters());

    // Body section
    let tblBody = document.createElement("tbody");
    data.forEach((character: Character) => {
        tblBody.appendChild(AddRowTableCharacters(character));
    });

    // Table
    let table = document.createElement("table");
    table.setAttribute("class", "tbl-character");
    table.appendChild(tblHeader);
    table.appendChild(tblBody);
    
    // Container Table Div
    let tblDiv = document.createElement("div");
    tblDiv.appendChild(table);
    tblDiv.setAttribute("class", "tbl-cont");
    
    return tblDiv;
}
