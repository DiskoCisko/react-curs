import React from 'react';

export default class Bot extends React.Component {
   state = {
       text: this.props.text,
       author: this.props.author
   };

   render() {
    return (<>
        <div className="bot">{ this.props.text }, { this.props.author }</div>
        </>)
   }
}
