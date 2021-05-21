import React, {useEffect, useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
  
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function SimpleList({chats}) {

  return ( <> 
      {chats.map((item) => {
        const linkUrl = "/" + String(item.id);
          return (<ListItemLink button key={item.id}>
            <Link className="link black" to={linkUrl}>{item.name}</Link>
        </ListItemLink>)
      })}
 </>
  );
}

const mapStateToProps = state => {
  const chats = state;
  return chats
}

export default connect(mapStateToProps)(SimpleList);