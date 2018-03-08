import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import {ContactFormConnected} from './components/ContactForm';
import {store} from './store';


const WithRedux = () => (
    <Provider store={createStore(store, applyMiddleware(logger))}>
        <ContactFormConnected/>
    </Provider>
);

export {WithRedux};