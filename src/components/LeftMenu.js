import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ChatList from './ChatList'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));


export default function SimpleList(props) {
  const classes = useStyles();
  return ( <> 
    {props.menuShow && <div className={classes.root}>
    
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
       <ChatList />
      </List>
    </div>} </>
  );
}