import React from 'react';
import Button from '@material-ui/core/Button';

class Form extends  React.Component {

    state = {
        currentMessage: "",
        currentAuthor: ""
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onAddMes(this.state.currentMessage)
        this.setState({currentMessage: ""})
    }
    // handleInput = (event) => {
    //     this.setState({currentAuthor: event.target.value})
    // }
    handleMes = (event) => {
        this.setState({currentMessage: event.target.value})
    }

    render() {
        return <form onSubmit={this.handleSubmit} className=" flex">
        <textarea className="textAr"   
            value={this.state.currentMessage} 
            readonly placeholder="your news..." 
            onInput={ this.handleMes }>
        </textarea>
        <Button type="submit"
            disabled={!this.state.currentMessage} 
            className="btn"
            variant="contained" 
            color="primary">
            Отправить
        </Button>
    </form>
    }
}
export default Form;
