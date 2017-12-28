import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import thunkMiddleware from 'redux-thunk';


//const store = createStore(reducer, initState);
// const store = createStore(reducer, initState, applyMiddleware(thunk));
// export default store;
let createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export default createStoreWithMiddleware(reducer);