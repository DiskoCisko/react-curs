import React from 'react';

export default class Bot extends React.Component {
   render() {
    return <div className="bot">{ this.props.text }, { this.props.sendler }
                <span className="author">
                    { this.props.author }
                </span>
            </div>
   }
}
