import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import  Routes  from './Routes';
import { Provider } from 'react-redux';

import initStore from './utils/store';
import './index.scss';


ReactDOM.render(
   <Provider store={ initStore }>
   <Routes />
   </Provider>,
   document.getElementById('root'),
);

