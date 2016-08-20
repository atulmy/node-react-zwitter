// Client

import { combineReducers } from 'redux';

import flashMessages from './flash-messages';
import auth from './auth';

export default combineReducers({
    flashMessages,
    auth
});