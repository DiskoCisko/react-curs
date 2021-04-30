import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         maessege: ["Bro"],
      }
    //  this.sendMessege = this.sendMessege.bind(this);
   }
   // sendMessege() {
   //    this.setState(state => ({
   //       maessege: state.maessege.concat("Bro")
   //    }));
   //    console.dir(this.state.maessege);
   // }
   sendMessege = () => {
      this.setState(state => ({
         maessege: state.maessege.concat("Bro")
      }));
      console.dir(this.state.maessege);
   }
   render() {
      return (
         <div>
            <h1>{this.state.maessege}</h1>
            <button onClick={this.sendMessege}>Send messege</button>
         </div>
      )
   }
}
ReactDOM.render(
   <App />,
   document.getElementById('root'),
);

