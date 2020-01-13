import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {booksReducer} from "../features/books/books.state";
import {AppState} from "./types";

export const rootReducer = combineReducers<AppState>({
    books: booksReducer
});

const initialState: AppState = {
    books: []
};

export const store = createStore(rootReducer, initialState, composeWithDevTools());
