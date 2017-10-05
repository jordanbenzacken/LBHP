import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './redux/reducers';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import './index.css'; //use SASS ? See doc react-script. post css ?
//i18n , devtools

let store = createStore(reducers, {
    books: []
}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();