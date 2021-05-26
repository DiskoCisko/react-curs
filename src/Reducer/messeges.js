import {ADD_MES, UP_MES, } from './../actions/actionTypes';
import CHAT_LIST from './../components/chats_store';

let objStr;
      for (let i = 0; i < CHAT_LIST.length; i++) {
          objStr = {...objStr,[CHAT_LIST[i].id]: []}
        }
const newState = CHAT_LIST.reduce((accumulator, currentValue) => {
    return {
        ...accumulator,
        id: []
    }
})
console.log(newState)
const initialState = objStr;

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