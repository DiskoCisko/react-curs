import React from 'react';

export default class Message extends React.Component {

   render() { 
    return (
        <div className="messege">{ this.props.text } 
            <span className="author">
                { this.props.author }
            </span>
           
        </div>
        )
}}
