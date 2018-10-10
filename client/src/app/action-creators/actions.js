import axios from 'axios';
import { charactersEndpoint, seasonsEndpoint, comicsEndpoint, booksEndpoint, infoEndpoint } from '../../shared/constants';

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const FETCH_SINGLE_BOOK = 'FETCH_SINGLE_BOOK';
export const FETCH_CHARACTERS = "FETCH_CHARACTERS";
export const FETCH_COMICS = "FETCH_COMICS";
export const FETCH_SINGLE_CHARACTER = "FETCH_SINGLE_CHARACTER";
export const HANDLE_ERRORS = 'HANDLE_ERRORS';
export const HANDLE_SEASONS = 'HANDLE_SEASONS';
export const FETCH_INFO = 'FETCH_INFO';

export const handleErrors = (error) => {
    return {
        type: HANDLE_ERRORS,
        error
    }
}

const handleBooks = (books) => {
    return {
        type: FETCH_BOOKS,
        books
    }
}

export const fetchBooks = () => {
    return dispatch => {
        return axios.get(booksEndpoint)
            .then(res => dispatch(handleBooks(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
    }
}

const handleSingleBook = (book) => {
    return {
        type: FETCH_SINGLE_BOOK,
        book
    }
}

export const fetchSingleBook = (id) => {
    return dispatch => {
        return axios.get(`${booksEndpoint}/${id}`)
            .then(res => dispatch(handleSingleBook(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
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
            .catch(res => dispatch(handleErrors(res.message)));
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
            .catch(res => dispatch(handleErrors(res.message)));
    }
}

const handleComics = (comics) => {
    return {
        type: FETCH_COMICS,
        comics: comics.volumes
    }
}

export const fetchComics = () => {
    return dispatch => {
        return axios.get(comicsEndpoint)
            .then(res => dispatch(handleComics(res.data)))
            .catch(res => dispatch(handleErrors(res.message)));
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
            .catch(res => dispatch(handleErrors(res.message)));
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
            .catch(res => dispatch(handleErrors(res.message)));
    }
}