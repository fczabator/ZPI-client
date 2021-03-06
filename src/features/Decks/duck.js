import {CREATED_DECK, DELETE_DECK, LOADED_DECKS, LOAD_LANGUAGES, LOADED_LANGUAGES, SEARCHED_DECKS, LOAD_DECKS, ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES} from './actions';
import _ from 'lodash';
import {combineReducers} from 'redux';


export const decks = (state = [], action) => {
    switch (action.type) {
        case CREATED_DECK: {
            const newState = [...state, action.deck];
            return newState;
        }
        case DELETE_DECK: {
            return state.filter(deck => deck._id.$oid !== action.deckId);
        }
        case LOADED_DECKS: {
            return _.merge(action.decks, state);
        }
        case SEARCHED_DECKS: {
            return action.decks;
        }
        case ADD_TO_FAVORITES: {
            return state.map((deck) => {
                if (deck._id.$oid === action.deckId) {
                    return {...deck, favorite: true};
                }
                return deck;
            })
        }
        case REMOVE_FROM_FAVORITES: {
            return state.map((deck) => {
                if (deck._id.$oid === action.deckId) {
                    return {...deck, favorite: false};
                }
                return deck;
            }) 
        }
        default:
            return state;
    }
};

export const languages = (state = [], action) => {
    switch (action.type) {
        case LOADED_LANGUAGES: {
            return _.merge(action.languages, state);
        }
        default:
            return state;
    }
};

export const isFetching = (state = true, action) => {
    switch (action.type) {
        case LOAD_DECKS: {
            return true;
        }
        case LOADED_DECKS: {
            return false;
        }
        case LOAD_LANGUAGES: {
            return true;
        }
        case LOADED_LANGUAGES: {
           return false;
        }
        case SEARCHED_DECKS: {

            return false;
        }
        default:
            return state;
    }
};

export const decksReducer = combineReducers({
    decks,
    languages,
    isFetching
});
