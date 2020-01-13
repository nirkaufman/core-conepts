import { Action } from "redux";

// The structure of a book
export interface Book {
    id?: number,
    title: string,
    description: string
}

// Book actions
export interface BookLoadedAction extends Action {
    type: string;
    payload: Book[]
}

export interface BookAddedAction extends Action {
    type: string;
    payload: Book
}

// Group all actions types under one union type
export type BookActionTypes = BookLoadedAction | BookAddedAction
