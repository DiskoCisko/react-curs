import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from './Routes';

import './index.scss';

const { Server } = require("socket.io");
const io = new Server(server);
// import App from './components/child'

io.on('connection', (socket) => {
   console.log('a user connected');
 });




ReactDOM.render(
   <Routes />,
   document.getElementById('root'),
);

