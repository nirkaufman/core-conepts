import {Book, BookActionTypes, BookAddedAction, BookLoadedAction} from "./types";

// Required for debugging
export const BOOKS_LOADED = 'BOOKS :: LOADED';
export const BOOK_ADDED = 'BOOKS :: ADDED';

// "action creator" is a function that "create" (returns) action
export function booksLoaded(books: Book[]): BookLoadedAction {
    return {
        type: BOOKS_LOADED,
        payload: books
    }
}

export function bookAdded(newBook: Book): BookAddedAction {
    return {
        type: BOOK_ADDED,
        payload: newBook
    }
}

// This function returns new updated books array depend on the action
export function booksReducer(booksState: Book[] = [], action: BookActionTypes): Book[] {
    switch (action.type) {
        case BOOKS_LOADED:
            return action.payload as Book[];
        case BOOK_ADDED:
            return [...booksState, action.payload as Book];
        default:
            return booksState;
    }
}
