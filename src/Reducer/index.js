import { combineReducers } from 'redux';
import chats from './chats';
import messeges from './messeges';
import art from './art';

export default combineReducers({
    messeges: messeges,
    chats: chats,
    art: art
    });