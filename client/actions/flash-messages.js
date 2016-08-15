// Client

import { FLASH_MESSAGE_ADD, FLASH_MESSAGE_DELETE } from './types';

export function flashMessageAdd(message) {
    return {
        type: FLASH_MESSAGE_ADD,
        message
    }
}

export function flashMessageDelete(id) {
    return {
        type: FLASH_MESSAGE_DELETE,
        id
    }
}