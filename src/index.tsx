import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleWare from 'redux-saga';
import {
    createStore,
    applyMiddleware,
} from 'redux';
import './localization/localization';
import App from './app/App';
import rootSagas from './roots/rootSagas';
import rootReducer from './roots/rootReducers';
import './index.scss';
import 'antd/dist/antd.css';
import { createLocalization } from './localization/localization';

const defaultLanguage = 'en';

function initialize() {
    const root = document.getElementById('root');
    const sagaMiddleWare = createSagaMiddleWare();
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
    createLocalization(defaultLanguage);

    sagaMiddleWare.run(rootSagas);

    ((window as any).store = store);

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        root
    );
}

initialize();