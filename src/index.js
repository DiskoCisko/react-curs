import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import  Routes  from './Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store} from './utils/store';
import './index.scss';


ReactDOM.render(
   <Provider store={ store }>
   <Routes />
   </Provider>,
   document.getElementById('root'),
);

