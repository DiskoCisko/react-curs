import React, {useEffect} from "react";
import {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import { connect } from "react-redux";
import {addChat} from './actions/actions';
import {addMes} from './actions/actions';
import {upMes} from './actions/actions';
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

const Routes = ({chats, messeges, addMes, upMes, addChat}) => {

    const [menuShow, setMenuShow] = useState(false)
    const [idChat, setIdChat] = useState('');

   
    useEffect(() => {
      if(!messeges.hasOwnProperty(chats[chats.length - 1].id)) {
        upMes(chats[chats.length - 1].id)
      }
    }, [chats]);

    useEffect(() => {
      if (Object.keys(messeges).length === 0) {
        return
    } else  if (messeges.hasOwnProperty(idChat)) {
      if(messeges[idChat].length !== 0) {
        if (messeges[idChat][messeges[idChat].length - 1].author === AUTHORS.human) {
          addMes(idChat, {text: BOT_ANS[Math.floor(Math.random() * BOT_ANS.length)], author: AUTHORS.bot})
        }}
    }
    }, [messeges]);

    const updateIdChat = (id) => {
      setIdChat(id);
    } 


    const addMessege = (newMes) => {
      addMes(idChat, {text: newMes, author: AUTHORS.human});
    }

    const isMenuShow = () => {
      setMenuShow(!menuShow)
    } 
    return (
      
      <BrowserRouter>
      <Header 
        isMenuShow={isMenuShow}
        addChat={addChat} 
             />
      <LeftMenu menuShow={menuShow}
                
      />
        <Switch>
          <Route path="/" exact>
            <ChatList menuShow={menuShow}
                      />
          </Route>
          <Route path="/:id" exact>
        <App 
        
        updateIdChat = {updateIdChat}
        idChat = {idChat}
        messages = {messeges}
        addMessege = {addMessege}
         />
          {(idChat !== ''&&idChat > chats.length) && <Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>

    );
  };
  const mapStateToProps = state => {
    return state
  }
  
  export default connect(mapStateToProps, { addMes, upMes, addChat })(Routes);
