import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import 'material-design-icons/iconfont/material-icons.css'

//
//get basket after refresh.
const persistedState = {
    basket: JSON.parse(window.sessionStorage.getItem('basket'))
};
let store = createStore(reducers, {
    books: [],
    ...persistedState
}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();