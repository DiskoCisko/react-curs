import {ADD_MES, UP_MES, } from './../actions/actionTypes';
import CHAT_LIST from './../components/chats_store';

const newState = CHAT_LIST.reduce((accumulator, currentValue) => {
    return {
        ...accumulator,
        [currentValue.id]: []}
}, {})
const initialState = newState;

export default function (st = initialState, action) {
    switch (action.type) {
        case ADD_MES: {
            const content = action.payloid;
            return {
                ...st,
                [content.id]: [...st[content.id], content.messege]
            }
        }case UP_MES: {
            const content = action.payloid;
            return {
                ...st,
                [content.id]: []
            }
        }
        default:
            return st;
    }
} 