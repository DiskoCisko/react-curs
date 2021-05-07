import React from 'react';
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

 class App extends React.Component {

    state = {
        messages: [],
        currentMessage: "",
        currentAuthor: ""
    };
    componentDidUpdate() {
        if(this.state.messages.length % 2 === 1) {
            console.log('fddfgj');
            this.setState({ 
                messages: [ ...this.state.messages, BOT_ANS[Math.floor(Math.random() * BOT_ANS.length)] ],
            });
        }
    }
    handleClick = () => {
          
        this.setState({ 
            messages: [ ...this.state.messages, this.state.currentMessage ],
            currentMessage: ""
        }, this.botAnswer);
    };
    handleInput = (event) => {
        this.setState({currentAuthor: event.target.value})
    }
    handleMes = (event) => {
        this.setState({currentMessage: event.target.value})
    }
    render() {
            const messageElements =  this.state.messages.map( (text, index) => {
                if (index % 2 === 1) {
                    return <Bot key={ index } text={ text } author={this.state.currentAuthor}/>
                }
                return <Message key={ index } text={ text } author={this.state.currentAuthor}/>
            });
            return <div className="container flex">
                <div className="mes-wrp">{ messageElements }</div>
                <input type="nape" value={this.state.currentAuthor} placeholder="your name" onInput={ this.handleInput } className="input"/>
                <textarea className="textAr" value={this.state.currentMessage} readonly placeholder="your news..." onInput={ this.handleMes }>
                </textarea>
                <button onClick={ this.handleClick } 
                        disabled={!this.state.currentMessage || !this.state.currentAuthor} 
                        className="btn">
                    Отправить
                </button>
            </div>  
    }
 }
;
 export default App;