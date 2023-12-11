import uuid from 'uuid-int';
import { Gender, Species, Status } from "../enums";
import { Location } from '../interfaces/location';
import { Character } from '../interfaces/character';
import { CreateCharacter } from '../services/character-services';
import { NewRecordTableCharacters } from './tableCharactersNewRecord';

const form = document.querySelector('#form') as HTMLFormElement

export const FormCharacterCreate = (): void => {
    let container: HTMLElement;
    container = document.getElementById("selectSatus") as HTMLElement;
    container.appendChild(selectFromEnum(Status, 'inputGroupSelectStatus', 'form-select'));
    container = document.getElementById("selectSpecies") as HTMLElement;
    container.appendChild(selectFromEnum(Species, 'inputGroupSelectSpecies', 'form-select'));
    container = document.getElementById("selectGender") as HTMLElement;
    container.appendChild(selectFromEnum(Gender, 'inputGroupSelectGender', 'form-select'));

    form.addEventListener('submit', event => {
        event.preventDefault();
    
        const location: Location = {
            name: (document.getElementById('nameUbication') as HTMLInputElement).value,
            url: (document.getElementById('urlUbication') as HTMLInputElement).value
        };
        const origin: Location = {
            name: (document.getElementById('nameOrigin') as HTMLInputElement).value,
            url: (document.getElementById('urlOrigin') as HTMLInputElement).value
        };
        const newCharacter: Character = {
            id: uuid(10).uuid(),
            name: (document.getElementById('name') as HTMLInputElement).value,
            type: (document.getElementById('type') as HTMLInputElement).value,
            image: (document.getElementById('image') as HTMLInputElement).value,
            url: (document.getElementById('url') as HTMLInputElement).value,
            created: (document.getElementById('created') as HTMLInputElement).value,
            status: (document.getElementById('inputGroupSelectStatus') as HTMLSelectElement).value as Status,
            species: (document.getElementById('inputGroupSelectSpecies') as HTMLSelectElement).value as Species,
            gender: (document.getElementById('inputGroupSelectGender') as HTMLSelectElement).value as Gender,
            location,
            origin,
            episode: (document.getElementById('episode') as HTMLInputElement).value.split(",")
        };
    
        CreateCharacter(newCharacter, "CharactersRickAndMorty");
        NewRecordTableCharacters(newCharacter);
        resetForm();
    });

}

const selectFromEnum = (enumObject: Record<string, string>, id: string, styles: string): HTMLSelectElement => {
    const selectElement: HTMLSelectElement = document.createElement("select");
    selectElement.id = id;
    selectElement.classList.add(styles);
    for (const key in enumObject) {
        if (enumObject.hasOwnProperty(key)) {
            const optionElement: HTMLOptionElement = document.createElement("option");
            optionElement.value = enumObject[key];
            optionElement.text = key;
            selectElement.appendChild(optionElement);
        }
    }
    return selectElement;
}

const resetForm = (): void => {
    form.reset();
};