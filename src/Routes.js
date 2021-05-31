import React, {useEffect} from "react";
import {useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,

} from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import {getArticle} from './actions/actions';
import {addChat} from './actions/actions';
import {addMesWithThunk} from './actions/actions';
import {upMes} from './actions/actions';

import ChatList from './components/ChatList';
import InstallPopup from './components/installPopup';
import App from './components/child';
import Header from './components/Header';
import LeftMenu from './components/LeftMenu';

import Art from './components/Art';
import AUTHORS from './components/authors';

const Routes = ({chats, messeges, addMesWithThunk, upMes, addChat}) => {
  const dispatch = useDispatch();
  const [menuShow, setMenuShow] = useState(false)
  const [idChat, setIdChat] = useState('');
  
  useEffect(() => {
    if(!messeges.hasOwnProperty(chats[chats.length - 1].id)) {
      upMes(chats[chats.length - 1].id)
    }
    console.log(idChat)
  }, [chats]);

  useEffect(() => {
    dispatch(getArticle());
  }, []);

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
          <ChatList menuShow={menuShow}/>
          <InstallPopup />
        </Route>
        <Route path="/Art" exact>
          <Art/>
        </Route>
        <Route path="/:id" exact>
        <Route >
        <ChatList menuShow={menuShow}
                    />
        </Route>
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
