import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {getArticle} from './../actions/actions';
import {RESP_STATUS} from './../utils/constance';

const Art = () => {
const articles = useSelector(state => state.art.articlList);
const articleStatus = useSelector(state => state.art.request.status);
const articleError = useSelector(state => state.art.request.error);
const dispatch = useDispatch();
useEffect(() => {
    dispatch(getArticle());
        }, []);
const catFact = articles.map((item, index) => {
    return <>
        <h3 >Fact #{index}</h3>
        <p>{item.text}</p>
    </>
})
if(articleStatus === RESP_STATUS.PENDING) {
    return <h2>Loading</h2>
}
if(articleError) {
    return <h2>{articleError}</h2>
}
    return <>
        <h1>Yoooy</h1>
        {catFact}
    </>
}

export default Art;