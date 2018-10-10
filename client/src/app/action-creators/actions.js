import axios from 'axios';
import { charactersEndpoint, seasonsEndpoint, comicsEndpoint } from '../../shared/constants';


export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_SINGLE_CHARACTER = "FETCH_SINGLE_CHARACTER";
export const FETCH_COMICS = "FETCH_COMICS";

const handleCharacters = (characters) => {
    let myCharacters = characters[0].main_characters;
    return {
        type: FETCH_CHARACTERS,
        characters: myCharacters
    }
}

export const fetchCharacters = () => {
    return dispatch => {
        return axios.get(charactersEndpoint)
            .then(res => dispatch(handleCharacters(res.data)))
    }
}

const handleSingleCharacter = (character) => {
    return {
        type: FETCH_SINGLE_CHARACTER,
        character
    }
}

export const fetchSingleCharacter = (id) => {
    return dispatch => {
        return axios.get(`${charactersEndpoint}/${id}`)
            .then(res => dispatch(handleSingleCharacter(res.data)))
    }
}

const handleComics = (comics) => {
    console.log(comics);
    return {
        type: FETCH_COMICS,
        comics: comics.volumes
    }
}

export const fetchComics = () => {
    return dispatch => {
        return axios.get(comicsEndpoint)
            .then(res => dispatch(handleComics(res.data)))
    }
}