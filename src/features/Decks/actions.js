export const CREATE_DECK = 'CREATE_DECK';
export const CREATED_DECK = 'CREATED_DECK';
export const DELETE_DECK = 'DELETE_DECK';
export const LOAD_DECKS = 'LOAD_DECKS';
export const LOADED_DECKS = 'LOADED_DECKS';
export const LOAD_LANGUAGES = 'LOAD_LANGUAGES';
export const LOADED_LANGUAGES = 'LOADED_LANGUAGES';
export const SEARCHED_DECKS = 'SEARCHED_DECKS';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';


export const createDeck = ({name, description, ownerId, language}) => {
    debugger;
    return {
        type: CREATE_DECK,
        deck: {
            name,
            description,
            ownerId,
            language
        }
    };
};

export const createdDeck = (deck) => ({type: CREATED_DECK, deck});

export const deleteDeck = (deckId) => ({type: DELETE_DECK, deckId});

export const loadDecks = (keyword, filter) => ({type: LOAD_DECKS, keyword, filter});

export const loadedDecks = (decks) => ({type: LOADED_DECKS, decks});

export const loadLanguages = () => ({type: LOAD_LANGUAGES});

export const loadedLanguages = (languages) => ({type: LOADED_LANGUAGES, languages});

export const searchedDecks = (decks) => ({type: SEARCHED_DECKS, decks});

export const addToFavorites = (deckId) => ({type: ADD_TO_FAVORITES, deckId});

export const removeFromFavorites = (deckId) => ({type: REMOVE_FROM_FAVORITES, deckId});
