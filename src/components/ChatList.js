import React, {useEffect, useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import {useDispatch, useSelector} from 'react-redux';
 import {delChat} from './../actions/actions';
  
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleList({chats}) {
  const dispatch = useDispatch();

  return ( <> 
      {chats.map((item, index) => {
        const linkUrl = "/" + String(item.id);
        const letDelChat = () => {
    dispatch(delChat(index))
  }
          return (
            <><ListItemLink button key={item.id}>
            <Link className={item.active} to={linkUrl}>{item.name}</Link>
            <button className="btn-del" onClick={letDelChat}>X</button> 
        </ListItemLink>
        
        </>
        )
      })}
 </>
  );
}

const mapStateToProps = state => {
  const chats = state;
  return chats
}

export default connect(mapStateToProps)(SimpleList);