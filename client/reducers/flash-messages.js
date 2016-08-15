// Client

import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

import { FLASH_MESSAGE_ADD, FLASH_MESSAGE_DELETE } from '../actions/types';

export default (state = [], action = {}) => {
    switch(action.type) {
        case FLASH_MESSAGE_ADD:
            return [
                ...state,

                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text,
                }
            ];

        case FLASH_MESSAGE_DELETE:
            const index = findIndex(state, { id: action.id });

            if(index >= 0) {
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }
            return state;

        default:
            return state;
    }
}