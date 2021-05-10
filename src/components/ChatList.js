import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
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
        </ListItemLink>
      </List>
    </div>
  );
}