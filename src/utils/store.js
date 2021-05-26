import { createStore, applyMiddleware, compose ,combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from "redux-thunk";
import chats from './../Reducer/chats';
import messeges from './../Reducer/messeges';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


import initReducers from './../Reducer/index';
import midlwar from './../midlwar/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
 };

 const persistedReducer  = persistReducer(persistConfig, initReducers);



 export const store = createStore(
    initReducers,
    composeEnhancers(applyMiddleware(thunk)));
// export const  persistor = persistStore(store);



