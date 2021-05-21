import {ADD_CHAT} from './../actions/actionTypes';
import CHAT_LIST from './../components/chats_store';

const initialState = CHAT_LIST;

export default function ( state = initialState, action) {
    switch (action.type) {
        case ADD_CHAT: {
            return [
                ...state,
        {
          name: `Chat ${state.length + 1}`,
          id: state.length + 1
        }
            ]
        }
        default:
            return state;
    }
}