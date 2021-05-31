import { createStore, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import initReducers from './../Reducer/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 export const store = createStore(
    initReducers,
    composeEnhancers(applyMiddleware(thunk)));
// export const  persistor = persistStore(store);



