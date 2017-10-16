import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import 'material-design-icons/iconfont/material-icons.css'

// See doc react-script. post css ? i18n , devtools
// TODO : popin detail, add to basket with new view, header, local storage ??
// material compnents package nicely -- seearch nok (trim, contains)
let store = createStore(reducers, {
    books: []
}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();