import React, {useEffect} from "react";
import {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import CHAT_LIST from './components/chats_store';
import ChatList from './components/ChatList';


import App from './components/child';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';
export const Routes = () => {
    const [menuShow, setMenuShow] = useState(false)
    const [chatList, setChatlist] = useState(CHAT_LIST);
    
    const updateChatList = () => {
      setChatlist([
        ...chatList,
        {
          name: `Chat ${chatList.length + 1}`,
          id: chatList.length + 1
        }
      ])
    }
    const isMenuShow = () => {
      setMenuShow(!menuShow)
    } 
    return (
      <BrowserRouter>
      <Header isMenuShow={isMenuShow} 
              updateChatList={updateChatList}/>
      <LeftMenu menuShow={menuShow}
                chatList={chatList}
      />
        <Switch>
          <Route path="/" exact>
            <ChatList menuShow={menuShow}
                      chatList={chatList}/>
          </Route>
          <Route path="/:id" exact>
          {/* {<Redirect to="/" />} */}
        <App chatList={chatList} />
          {/* {goBack() && <Redirect to="/" />} */}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  };