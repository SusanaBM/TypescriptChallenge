import { Character } from '../interfaces/character';

export const AddRowTableCharacters = (character: Character): HTMLTableRowElement => {

    let row: HTMLTableRowElement;
    let cell:HTMLTableCellElement;

    row = document.createElement("tr");

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(character.id.toString()));
    row.appendChild(cell);

    cell = document.createElement("td");
    let img = document.createElement("img");
    img.setAttribute("src", character.image);
    cell.appendChild(img);
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(character.name));
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(character.status));
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(character.species));
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(character.type));
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(character.gender));
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(character.origin.name));
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(character.location.name));
    row.appendChild(cell);

    cell = document.createElement("td");
    cell.appendChild(document.createTextNode(new Date(character.created).toLocaleDateString('es-ES')));
    row.appendChild(cell);

    return row;
}
