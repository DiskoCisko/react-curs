import React from 'react';
import Message from './message'
import Form from './Form'
import Bot from './bot'
import ChatList from './ChatList'
import Header from './Header'

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
        menuShow: false
    };
    componentDidUpdate() {
        if(this.state.messages[this.state.messages.length-1].author === AUTHORS.human) {
            this.setState({ 
                messages: [ ...this.state.messages, {text: BOT_ANS[Math.floor(Math.random() * BOT_ANS.length)], author: AUTHORS.bot} ],
            });
        }
    }
    isMenuShow = () => {
        this.setState({menuShow: !this.state.menuShow})
    }
    handleClick = (newMes) => {
        this.setState({ 
            messages: [ ...this.state.messages, {text: newMes, author: AUTHORS.human} ],
        }, this.botAnswer);
    };

    render() {
            const messageElements =  this.state.messages.map( (mes, index) => {
                if (mes.author === AUTHORS.bot) {
                    return <Bot key={ index } 
                        text={ mes.text } 
                        sendler={AUTHORS.human} 
                        author={mes.author}/>
                }
                return <Message key={ index } text={ mes.text } author={mes.author}/>
            });
            return <>
                <Header isMenuShow={this.isMenuShow}/>
                <div className="wrp-list">
                    <ChatList menuShow={this.state.menuShow}/>
                    <div className="main flex">
                        <div className="mes-wrp">{ messageElements }</div>
                        <Form onAddMes={this.handleClick}/>
                    </div>  
                </div>
                </>
    }
 }
;
 export default App;