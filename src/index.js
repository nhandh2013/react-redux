import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './example';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
