import {ADD_MES, UP_MES} from './../actions/actionTypes';
import CHAT_LIST from './../components/chats_store';

let objStr;
      for (let i = 0; i < CHAT_LIST.length; i++) {
          objStr = {...objStr,[CHAT_LIST[i].id]: []}
        }
const initialState = objStr;

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_MES: {
            const content = action.payloid;
            return {
                ...state,
                [content.id]: [...state[content.id], content.messege]
            }
        }case UP_MES: {
            const content = action.payloid;
            return {
                ...state,
                [content.id]: []
            }
        }
        default:
            return state;
    }
} 