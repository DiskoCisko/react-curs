import React, {useEffect, useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
  
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList(props) {


  return ( <> 
      {props.chatList.map((item) => {
        const linkUrl = "/" + String(item.id);
          return (<ListItemLink button key={item.id}>
            <Link className="link black" to={linkUrl}>{item.name}</Link>
        </ListItemLink>)
      })}
 </>
  );
}