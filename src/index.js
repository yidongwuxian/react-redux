import React                 from 'react';
import ReactDOM              from 'react-dom';
import store                 from './store/index';  
import { Provider }          from 'react-redux'; 
import App                   from './App';
import registerServiceWorker from './registerServiceWorker';

//let store = createStore(reducer);  

ReactDOM.render(  
    <Provider store={store}>  
        <App />  
    </Provider>,  
    document.getElementById('root')  
) 

registerServiceWorker();
