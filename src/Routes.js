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
import {addMesWithThunk} from './actions/actions';
import {upMes} from './actions/actions';


import CHAT_LIST from './components/chats_store';
import ChatList from './components/ChatList';

import App from './components/child';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';

import Art from './components/Art';
import AUTHORS from './components/authors';

let objStr;
      for (let i = 0; i < CHAT_LIST.length; i++) {
          objStr = {...objStr,[CHAT_LIST[i].id]: []}
        }

const Routes = ({chats, messeges, addMesWithThunk, upMes, addChat}) => {

    const [menuShow, setMenuShow] = useState(false)
    const [idChat, setIdChat] = useState('');
   
    useEffect(() => {
      if(!messeges.hasOwnProperty(chats[chats.length - 1].id)) {
        upMes(chats[chats.length - 1].id)
      }
    }, [chats]);

    const updateIdChat = (id) => {
      setIdChat(id);
    } 


    const addMessege = (newMes) => {
      addMesWithThunk(idChat, {text: newMes, author: AUTHORS.human});
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
          <Route path="/Art" exact>
            <Art/>
          </Route>
          <Route path="/:id" exact>
        <App 
        
        updateIdChat = {updateIdChat}
        idChat = {idChat}
        chats = {chats}
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
  
  export default connect(mapStateToProps, { addMesWithThunk, upMes, addChat })(Routes);
