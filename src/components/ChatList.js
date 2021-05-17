import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CHAT_LIST = [
    {
        name: 'Chat 1',
        id: 'chat1'
      },
      {
        name: 'Chat 2',
        id: 'chat2'
      },
      {
        name: 'Chat 3',
        id: 'chat3'
      }
]

  
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList(props) {
  const classes = useStyles();
  return ( <> 
      {CHAT_LIST.map((item) => {
          return (<ListItemLink button key={item.id}>
            <Link className="link black" to={`/chats${item.id}`}>{item.name}</Link>
        </ListItemLink>)
      })}
 </>
  );
}