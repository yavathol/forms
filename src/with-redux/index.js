import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {ContactForm} from './components/ContactForm';
import {store} from './store';


const WithRedux = () => (
    <Provider store={createStore(store, applyMiddleware(logger))}>
        <ContactForm/>
    </Provider>
);

export {WithRedux};