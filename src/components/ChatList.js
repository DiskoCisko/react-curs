import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const CHAT_LIST = [
    "What",
    "Is",
    "Love?",
    "Baby",
    "Don't",
    "Hart me",
    "No more"
]

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList(props) {
  const classes = useStyles();
  return ( <> 
    {props.menuShow && <div className={classes.root}>
    
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
      {CHAT_LIST.map((item, index) => {
          return (<ListItemLink button key={index}>
          <ListItemText primary={item} item={item} />
        </ListItemLink>)
        
      })}
        {/* <ListItem button>
          <ListItemText primary="What" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Is" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Love?" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Baby" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Don't" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Hurt" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Me" />
        </ListItemLink>
        <ListItemLink href="#simple-list">
          <ListItemText primary="No more" />
        </ListItemLink> */}
      </List>
    </div>} </>
  );
}