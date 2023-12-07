import axios from 'axios'
import { Character, ApiResponse } from '../interfaces';

const API_URL = `https://rickandmortyapi.com/api/character`;
const STORAGE_KEY = "CharactersRickAndMorty"

export const getAllCharacters = async(): Promise<Character[]> => {

    const { data } = await axios.get<ApiResponse>(API_URL)
    // console.log(data)
    return data.results;
}

export const saveAllCharacters = (characters: Character[]): void => {
    let jsonCharacters = JSON.stringify(characters);
    localStorage.removeItem(STORAGE_KEY);
    localStorage.setItem(STORAGE_KEY, jsonCharacters);
}