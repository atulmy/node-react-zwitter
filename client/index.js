// Client

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import jwtDecode from 'jwt-decode';

import rootReducer from './reducers/root';
import routes from './routes';
import { setAuthorizationToken, setCurrentUser } from './actions/common/auth';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

if(localStorage.getItem('token')) {
    setAuthorizationToken(localStorage.getItem('token'));

    store.dispatch(setCurrentUser(jwtDecode(localStorage.getItem('token'))));
}

render(
    <Provider store={ store }>
        <Router history={ browserHistory } routes={ routes } />
    </Provider>,

    document.getElementById('app')
);