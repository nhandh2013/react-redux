import {createStore, compose  } from 'redux';
import reducer from './reducer/reducer';
let store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export default store;