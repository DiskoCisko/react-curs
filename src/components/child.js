import React from 'react';
import { withRouter } from "react-router";
import Message from './message'
import Form from './Form'
import Bot from './bot'

import AUTHORS from './authors';

 class App extends React.Component {
    componentDidMount() {
        this.props.updateIdChat(this.props.match.params.id)
    }
    componentDidUpdate() {
        if(this.props.match.params.id !== this.props.idChat) {
            this.props.updateIdChat(this.props.match.params.id)
        }
    }
    render() {
            let messageElements
            if (this.props.messages.hasOwnProperty(this.props.idChat)) {
                 messageElements =  this.props.messages[this.props.idChat].map( (mes, index) => {
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
                        <Form onAddMes={this.props.addMessege}/>
                        </div>  
                    </div>
                </>
    }
 };
 export default withRouter(App);