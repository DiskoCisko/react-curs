import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const initMes = ["Bro"];

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         maessege: ["Bro"],
         historyMessage: []
      }
   }
   sendMessege = () => {
      this.setState(state => ({
         historyMessage: state.maessege,
         maessege: state.maessege.concat(initMes)
      }));
      //console.dir(this.state.maessege);
      console.dir(this.state.historyMessage);
   }
   render() {
      return (
         <div>
            { this.state.maessege.map((mes) => (<h1 className="title">{mes}</h1>))}
            <button onClick={this.sendMessege}>Send Bro</button>
         </div>
      )
   }
}
ReactDOM.render(
   <App />,
   document.getElementById('root'),
);

