import { Character } from "./character";

export interface ApiResponse {
    info: Info;
    results: Character[]
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}
