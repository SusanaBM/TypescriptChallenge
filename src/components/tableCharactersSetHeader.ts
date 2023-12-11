
export const SetHeaderTableCharacters = (): HTMLTableRowElement => {

    let row: HTMLTableRowElement;
    let cell:HTMLTableCellElement;

    row = document.createElement("tr");

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Id"));
    row.appendChild(cell);

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Image"));
    row.appendChild(cell);

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Name"));
    row.appendChild(cell);

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Status"));
    row.appendChild(cell);

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Species"));
    row.appendChild(cell);

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Type"));
    row.appendChild(cell);

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Gender"));
    row.appendChild(cell);

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Origin"));
    row.appendChild(cell);

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Location"));
    row.appendChild(cell);

    cell = document.createElement("th");
    cell.appendChild(document.createTextNode("Created"));
    row.appendChild(cell);

    return row;
}
