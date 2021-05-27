import React from 'react';

export default class Bot extends React.Component {
   render() {
    return <div className="bot">Lets speak about Cats, { this.props.sendler }. 
                <div>{ this.props.text }</div>
                <span className="author">
                    { this.props.author }
                </span>
            </div>
   }
}
