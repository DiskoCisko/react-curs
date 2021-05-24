import {ADD_CHAT, UP_CHAT} from './../actions/actionTypes';
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
        case UP_CHAT: {
            const id = action.payloid.id;
            console.dir(state[0])
            const newState = state.map((item)=> {
                if (item.id == id) {
                   return {
                    name: `Chat ${item.id}`,
                    id: item.id,
                    active: 'active'
                   }
                } return {
                    name: item.name,
                    id: item.id,
                    active: ''
                };
            })
            return newState
        }
        default:
            return state;
    }
}