import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import {Provider} from 'react-redux'
import contactReducer from './reducers/contact'
import editform from './reducers/editform'
import search from './reducers/search'
import App from './App';

const store = createStore(
    combineReducers({
        contactstate: contactReducer,
        editform: editform,
        search: search
    })
);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

