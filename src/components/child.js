import React from 'react';
import Message from './message'
import Form from './Form'
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
const AUTHORS = {
    human: "User",
    bot: "Magic Man"
}
 class App extends React.Component {

    state = {
        messages: [],
    };
    componentDidUpdate() {
        if(this.state.messages.length % 2 === 1) {
            console.log('fddfgj');
            this.setState({ 
                messages: [ ...this.state.messages, BOT_ANS[Math.floor(Math.random() * BOT_ANS.length)] ],
            });
        }
    }
    handleClick = (newMes) => {
        this.setState({ 
            messages: [ ...this.state.messages, newMes ],
        }, this.botAnswer);
    };

    render() {
            const messageElements =  this.state.messages.map( (text, index) => {
                if (index % 2 === 1) {
                    return <Bot key={ index } 
                        text={ text } 
                        sendler={AUTHORS.human} 
                        author={AUTHORS.bot}/>
                }
                return <Message key={ index } text={ text } author={AUTHORS.human}/>
            });
            return <div className="container flex">
                <div className="mes-wrp">{ messageElements }</div>
                <Form onAddMes={this.handleClick}/>
            </div>  
    }
 }
;
 export default App;