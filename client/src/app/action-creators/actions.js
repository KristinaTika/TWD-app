import axios from 'axios';
import { charactersEndpoint, seasonsEndpoint, comicsEndpoint, booksEndpoint, infoEndpoint } from '../../shared/constants';

export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_SINGLE_CHARACTER = "FETCH_SINGLE_CHARACTER";
export const FETCH_COMICS = "FETCH_COMICS";
export const FETCH_BOOKS = 'FETCH_BOOKS';
export const HANDLE_ERRORS = 'HANDLE_ERRORS';
export const HANDLE_BOOKS = 'HANDLE_BOOKS';
export const HANDLE_SEASONS = 'HANDLE_SEASONS';
export const FETCH_INFO = 'FETCH_INFO';

const handleErrors = (error) => {
    return {
        type: HANDLE_ERRORS,
        error
    }
}

const handleBooks = (books) => {
    return {
        type: HANDLE_BOOKS,
        books
    }
}

export const fetchBooks = () => {
    return dispatch => {
        return axios.get(booksEndpoint)
            .then(res => dispatch(handleBooks(res.data)))
            .catch(res => dispatch(handleErrors(res.data)));
    }
}

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
            .catch(res => dispatch(handleErrors(res.data)));
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
            .catch(res => dispatch(handleErrors(res.data)));
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
            .catch(res => dispatch(handleErrors(res.data)));
    }
}

const handleInfo = (info) => {
    return {
        type: FETCH_INFO,
        info
    }
}

export const fetchInfo = () => {
    return dispatch => {
        return axios.get(infoEndpoint)
            .then(res => dispatch(handleInfo(res.data)))
            .catch(res => dispatch(handleErrors(res.data)));
    }
}

const handleSeasons = (seasons) => {
    return {
        type: HANDLE_SEASONS,
        seasons
    }
}

export const fetchSeasons = () => {
    return dispatch => {
        return axios.get(seasonsEndpoint)
            .then(res => dispatch(handleSeasons(res.data)))
            .catch(res => dispatch(handleErrors(res.data)));
    }
}