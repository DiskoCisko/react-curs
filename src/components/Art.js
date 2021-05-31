import React from "react";
import {useSelector} from 'react-redux';
import {RESP_STATUS} from './../utils/constance';

const Art = () => {
const articles = useSelector(state => state.art.articlList);
const articleStatus = useSelector(state => state.art.request.status);
const articleError = useSelector(state => state.art.request.error);
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
    return <div className="art">
        <h1>Yoooy</h1>
        {catFact}
    </div>
}

export default Art;