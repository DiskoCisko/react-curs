import React from 'react';


class Form extends  React.Component {

    state = {
        currentMessage: "",
        currentAuthor: ""
    };
    nandleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddMes(this.state.currentMessage)
        this.setState({currentMessage: ""})
    }
    handleInput = (event) => {
        this.setState({currentAuthor: event.target.value})
    }
    handleMes = (event) => {
        this.setState({currentMessage: event.target.value})
    }

    render() {
        return <form onSubmit={this.nandleSubmit} className="container flex">
        <textarea className="textAr" 
            onKeyUp={ this.handleKeyUp }  
            value={this.state.currentMessage} 
            readonly placeholder="your news..." 
            onInput={ this.handleMes }>
        </textarea>
        <button type="submit"
            disabled={!this.state.currentMessage} 
            className="btn">
            Отправить
        </button>
    </form>
    }
}

export default Form;