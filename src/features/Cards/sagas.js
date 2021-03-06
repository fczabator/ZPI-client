import {delay, takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {LOAD_CARDS, loadedCards} from './actions';
import {fetchCards, saveCards} from '../../api/cards';

export function* save (action) {
    yield call(saveCards, action.cards);
}

export function* loadCards (action) {
    const {deckId} = action;
    const cards = yield call(fetchCards, deckId);
    console.log(deckId);
    console.log(cards);
    yield put(loadedCards(cards));
}

export function* watchSave () {
    yield* takeEvery('SAVE_CARDS', save);
}

export function* watchLoadCards () {
    yield* takeEvery(LOAD_CARDS, loadCards);
}

const cardSagas = [watchSave, watchLoadCards];
export default cardSagas;
