import React from "react";
import {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,

} from "react-router-dom";

import ChatList from './components/ChatList';
import App from './components/child';
import Header from './components/Header'
export const Routes = () => {
    const [state, setState] = useState({menuShow: false})

    const isMenuShow = () => {
        setState({menuShow: !state.menuShow})
    }   
    return (
      <BrowserRouter>
      <Header isMenuShow={isMenuShow}/>

  
        <Switch>
          <Route path="/" exact>
            <ChatList menuShow={state.menuShow}/>
          </Route>
          <Route path="/App" exact>
            <App chatId={ 1 }/>
          </Route>
          {/* <Route path="/chats/:chatId">
            <App />
          </Route> */}
          {/* <Route
            path="/profile"
            render={(obj) => <Profile routerProp={obj} />}
            exact
          /> */}
        </Switch>
      </BrowserRouter>
    );
  };