import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Book} from "./types";
import {AppState} from "../../app/types";
import {bookAdded, booksLoaded} from "./books.state";

function Books () {
    const books = useSelector<AppState, Book[]>( state => state.books );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(booksLoaded([
            {id: 1, title: 'Book #1', description: 'Description for book #1'},
            {id: 2, title: 'Book #2', description: 'Description for book #2'},
            {id: 3, title: 'Book #3', description: 'Description for book #3'},
        ]))
    }, []);

    const addBook = () => {
        dispatch(bookAdded({ id: 4, title: 'Book #4', description: 'Book #4 description' }))
    };

    return (
        <div>
            <h4>Books Page</h4>
            <button onClick={addBook}>add book</button>
            <ul>
            {books.map( book => <li key={book.id}>{book.title}</li>)}
            </ul>
        </div>
    );
}

export default Books;
