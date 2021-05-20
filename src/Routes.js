import React, {useEffect} from "react";
import {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import { Provider } from 'react-redux';

import initStore from './utils/store';
import CHAT_LIST from './components/chats_store';
import ChatList from './components/ChatList';


import App from './components/child';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';

import BOT_ANS from './components/bot_ans';
import AUTHORS from './components/authors';

let objStr;
      for (let i = 0; i < CHAT_LIST.length; i++) {
          objStr = {...objStr,[CHAT_LIST[i].id]: []}
        }

export const Routes = () => {

    const [menuShow, setMenuShow] = useState(false)
    const [chatList, setChatlist] = useState(CHAT_LIST);
    const [messages, setMesseges] = useState(objStr);
    const [idChat, setIdChat] = useState('');

   
    useEffect(() => {
      if(!messages.hasOwnProperty(chatList[chatList.length - 1].id)) {
        setMesseges({
          ...messages,
          [chatList[chatList.length - 1].id]: []
      })
      }
    }, [chatList]);

    useEffect(() => {
      if (Object.keys(messages).length === 0) {
        return
    } else  if (messages.hasOwnProperty(idChat)) {
      if(messages[idChat].length !== 0) {
        if (messages[idChat][messages[idChat].length - 1].author === AUTHORS.human) {
          setMesseges({
            ...messages, 
            [idChat]: [ ...messages[idChat], {text: BOT_ANS[Math.floor(Math.random() * BOT_ANS.length)], author: AUTHORS.bot}]
          })
        }}
    }
    }, [messages]);

    const updateIdChat = (id) => {
      setIdChat(id);
    } 

    const updateChatList = () => {
      setChatlist([
        ...chatList,
        {
          name: `Chat ${chatList.length + 1}`,
          id: chatList.length + 1
        }
      ])
    }

    const addMessege = (newMes) => {
      setMesseges({
        ...messages,
        [idChat]: [...messages[idChat], {text: newMes, author: AUTHORS.human}]
      })
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
        <App 
        chatList = {chatList}
        updateIdChat = {updateIdChat}
        idChat = {idChat}
        messages = {messages}
        addMessege = {addMessege}
         />
          {(idChat !== ''&&idChat > chatList.length) && <Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>

    );
  };