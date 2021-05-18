import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CHAT_LIST from './chats_store';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white"
  },
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const handlClick = () => {
      props.isMenuShow()
  }

  const handleClick = () => {
    props.updateChatList();
    CHAT_LIST.push({
      name: `Chat ${chatList.length + 1}`,
      id: chatList.length + 1
    })
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton onClick={handlClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={handleClick}>
            Add chat
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}