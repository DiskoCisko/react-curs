import {ADD_CHAT, ADD_MES, UP_MES} from './actionTypes';

export const addChat = () => ({
    type: ADD_CHAT
})

export const addMes = (id, messege) => ({
    type: ADD_MES,
    payloid: {
        id,
        messege
    }
})

export const upMes = (id) => ({
    type: UP_MES,
    payloid: {
        id
    }
})