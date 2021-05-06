import _ from 'lodash';
import React, {useEffect } from 'react';
import Message from './message'
import Bot from './bot'


const BOT_ANS = [
    "Я буду рад с тобой поболтать",
    "Чё, как сам",
    "До встречи",
    "Полегче",
    "А сам что думаешь",
    "Ты думаешь, что я магический шар",
    "Ну привет",
    "А знаешь что",
    "Дай списать домашку",
    "Мне кажется или это не telegram",
    "А если Дуров спалит",
    "Тебе одиноко"
]
let  currentMessage, currentAuthor;
const  botMessegrs = [];

 class App extends React.Component {

    state = {
        messages: [],
    };
    componentDidMount() {
        this.isButtonActive();
    }
    componentDidUpdate() {
        if(this.state.messages.length % 2 === 1) {
            console.log('fddfgj');
            this.setState({ 
                messages: [ ...this.state.messages, BOT_ANS[Math.floor(Math.random() * BOT_ANS.length)] ],
            }, this.isButtonActive);
        }
    }
    isButtonActive = () => {
        if (!currentMessage || !currentAuthor) {
            document.querySelector('button').setAttribute('disabled', 'disabled')           
        } else {
            document.querySelector('button').removeAttribute('disabled')  
        }
    }
    handleClick = () => {
          
        this.setState({ 
            messages: [ ...this.state.messages, currentMessage ],
        }, this.botAnswer);
        currentMessage = "";
        document.querySelector('textarea').value = "";
    };
    handleInput = () => {
        currentAuthor = document.querySelector('input').value;
        this.isButtonActive();
    }
    handleMes = () => {
        currentMessage = document.querySelector('textarea').value;
        this.isButtonActive();
    }
    render() {
            const messageElements = this.state.messages.map(function (text, index) {
                if (index % 2 === 1) {
                    return <Bot key={ index } text={ text } author={currentAuthor}/>
                }
                return <Message key={ index } text={ text } author={currentAuthor}/>
            });
            return <div className="container flex">
                <div className="mes-wrp">{ messageElements }</div>
                <input type="nape" placeholder="your name" onInput={ this.handleInput } className="input"/>
                <textarea className="textAr" readonly placeholder="your news..." onInput={ this.handleMes }>
                </textarea>
                <button onClick={ this.handleClick } className="btn">Отправить</button>
            </div>  
    }
 }
;
 export default App;