import React from 'react';
import {Provider} from 'react-redux';
import {store} from "./store";
import Books from "../features/books/Books";

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <h2>React Redux with TypeScript</h2>
                <small>2020 Workshop</small>
                <Books/>
            </div>
        </Provider>
    );
}

export default App;
