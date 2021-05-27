import {ADD_CHAT, ADD_MES, UP_MES, UP_CHAT, ART_LOAD, ART_SUCS, ART_FAIL, DEL_CHAT} from './actionTypes';
import BOT_ANS from './../components/bot_ans';
import AUTHORS from './../components/authors';
import {URL} from './../utils/constance';

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

export const upChat = (id) => ({
    type: UP_CHAT,
    payloid: {
        id
    }
})

export const articleLoading = () => ({
    type: ART_LOAD
})

export const articleSucs = (article) => ({
    type: ART_SUCS,
    article
})

export const articleFail = (error) => ({
    type: ART_FAIL,
    error
})

export const getArticle = () => (dispatch) => {
    dispatch(articleLoading())
    fetch(URL)
        .then((response) => {
            if(!response.ok) {
                throw new Error('--------' + response.status)  
            } return response.json()
        })
        .then(resp => dispatch(articleSucs(resp)))
        .catch((err) => {
            articleFail(dispatch(err.message))
        });
}

export const delChat = (index) => ({
    type: DEL_CHAT,
    index
})

export const addMesWithThunk = (id, messege) => (dispatch, getState) => {
    dispatch(addMes(id, messege));
    if(messege.author === "User") {
        setTimeout(()=> {
            dispatch(addMes(id, {text: getState().art.articlList[Math.floor(Math.random() * getState().art.articlList.length)].text, author: AUTHORS.bot}))
            dispatch(upChat(id))
        }, 0)
    }
}