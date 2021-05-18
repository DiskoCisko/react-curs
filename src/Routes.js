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
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
export const Routes = () => {
    const [menuShow, setMenuShow] = useState(false)

    const isMenuShow = () => {
      setMenuShow(!menuShow)
    }   
    return (
      <BrowserRouter>
      <Header isMenuShow={isMenuShow}/>
      <LeftMenu menuShow={menuShow}/>
  
        <Switch>
          <Route path="/" exact>
            <ChatList menuShow={menuShow}/>
          </Route>
          <Route path="/:id" children={<App />} exact/>
            
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