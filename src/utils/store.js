import { createStore } from 'redux';
import initReducers from './../Reducer/index';


export default createStore(initReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());