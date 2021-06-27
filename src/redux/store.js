import { createStore,applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import CakeReducer from './cakes/cakeReducer';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;