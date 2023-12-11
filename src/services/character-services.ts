import axios from 'axios'
import { Character, ApiResponse } from '../interfaces';

const API_URL = `https://rickandmortyapi.com/api/character`;
const STORAGE_KEY = "CharactersRickAndMorty"

export const getApiAllCharacters = async(): Promise<Character[]> => {
    const { data } = await axios.get<ApiResponse>(API_URL)
    // console.log(data)
    return data.results;
}

export const saveAllCharacters = (characters: Character[]): void => {
    let jsonCharacters = JSON.stringify(characters);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(STORAGE_KEY, jsonCharacters);
}

export const getStorageCharacters = (): Character[] => {
    const characterData = localStorage.getItem(STORAGE_KEY);
    return (characterData !== null && characterData.length > 0) ? JSON.parse(characterData) : [];
}

export const CreateCharacter = (newCharacter: Character, storageKey: string): void => {
    var jsonCharacters: Character[] = getStorageCharacters();
    jsonCharacters.push(newCharacter);
    localStorage.setItem(storageKey, JSON.stringify(jsonCharacters));
}
