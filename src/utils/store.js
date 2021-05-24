import { createStore, applyMiddleware, compose} from 'redux';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


import initReducers from './../Reducer/index';
import midlwar from './../midlwar/index';

const persistConfig = {
    key: 'geekmessanger',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['chats', 'messeges'],
 };


const store = createStore(
    initReducers,
    compose(
        persistReducer(persistConfig),
        applyMiddleware(
            ...midlwar),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {},
    ));

const persistor = persistStore(store);

export default {store, persistor}