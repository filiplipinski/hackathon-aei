import thunk from 'redux-thunk';
import { applyMiddleware, createStore, compose } from 'redux';
import reducer from '../reducers/articleReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
