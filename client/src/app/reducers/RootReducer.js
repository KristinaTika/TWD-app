import { FETCH_CHARACTERS, FETCH_SINGLE_CHARACTER, FETCH_COMICS, FETCH_BOOKS, FETCH_INFO } from '../action-creators/actions';

const initialState = {
    characters: [],
    seasons: [],
}

const RootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHARACTERS:
            return { ...state, characters: action.characters };
        case FETCH_SINGLE_CHARACTER:
            return { ...state, character: action.character };
        case FETCH_COMICS:
            return { ...state, comics: action.comics };
        case FETCH_INFO:
            return { ...state, info: action.info };

        default:
            return state;
    }
}

export default RootReducer;