import React from 'react';

export default class Message extends React.Component {
//    state = {
//        text: this.props.text,
//        author: this.props.author
//    };

   render() { 
       console.dir(this.props)
    return (<>
        <div className="messege">{ this.props.text } 
            <span className="author">
                { this.props.author }
            </span>
           
        </div>
        </>)
}}
