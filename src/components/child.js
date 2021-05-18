import React from 'react';
import { withRouter } from "react-router";
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
        messages: {},
        idChat: this.props.match.params.id
    };

    componentDidMount() {

        let objStr;
        for (let i = 0; i < this.props.chatList.length; i++) {
            objStr = {...objStr,[this.props.chatList[i].id]: []}
          }       
        this.setState ({
            messages: 
                {
                    ...this.state.messages,
                    ...objStr 
                }})
    }
    componentDidUpdate() {
        if(this.props.match.params.id !== this.state.idChat) {
            this.setState({
                idChat: this.props.match.params.id
            })
            
        }
        if(!this.state.messages.hasOwnProperty(this.props.chatList[this.props.chatList.length - 1].id)) {
            this.setState ({
                messages: 
                    {
                        ...this.state.messages,
                        [this.props.chatList[this.props.chatList.length - 1].id]: []
                    }})
        }
        if (Object.keys(this.state.messages).length === 0) {
            return
        } else  if(this.state.messages[this.state.idChat].length !== 0) {
            if (this.state.messages[this.state.idChat][this.state.messages[this.state.idChat].length-1].author === AUTHORS.human) {
                this.setState({ 
                    messages: { ...this.state.messages, 
                        [this.state.idChat]: [ ...this.state.messages[this.state.idChat], {text: BOT_ANS[Math.floor(Math.random() * BOT_ANS.length)], author: AUTHORS.bot}] },
                });
            }
            }
    }
    handleClick = (newMes) => { 
        this.setState({
            messages: {
                ...this.state.messages,
                [this.state.idChat]: [...this.state.messages[this.state.idChat], {text: newMes, author: AUTHORS.human}]
            }
        });
    };
    render() {console.dir(this.state.messages)
            console.dir(this.state.messages[this.state.idChat])
            console.dir(this.state.idChat)
            let messageElements
            if (this.state.messages.hasOwnProperty(this.state.idChat)) {
                 messageElements =  this.state.messages[this.state.idChat].map( (mes, index) => {
                    if (mes.author === AUTHORS.bot) {
                        return <Bot key={ index } 
                            text={ mes.text } 
                            sendler={AUTHORS.human} 
                            author={mes.author}/>
                    }
                    return <Message key={ index } text={ mes.text } author={mes.author}/>
                });
            }
            return <>
                <div className="wrp-list">
                                <div className="main flex">
                        <div className="mes-wrp">{ messageElements }</div>
                        <Form onAddMes={this.handleClick}/>
                    </div>  
                </div>
                </>
    }
 };
 export default withRouter(App);