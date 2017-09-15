import {createStore, compose, combineReducers  } from 'redux';

// let defaultState = {
//     fruit: ["Banana", "Orange", "Apple", "Mango"],
//     toggleForm: false
// }
// let reducer = (state = defaultState, action) => {
//     switch (action.type) {
//         case 'TOGGLE':
//             return {...state, toggleForm: !state.toggleForm}
//         case 'ADD_ITEM':
//             return {...state, fruit: [...state.fruit, action.item]}
//         case 'REMOVE_ITEM':
//             return {...state, fruit: state.fruit.filter((e, i) => i !== action.index)}
//         default:
//             return state;
//     }
// }
let fruitReducer = ( state = ["Banana", "Orange", "Apple", "Mango"], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        case 'REMOVE_ITEM':
            return state.filter((e, i) => i !== action.index)
        default:
            return state;
    }
}
let toggleReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return !state
        default:
            return state;
    }
}
let reducer = combineReducers({
    fruit: fruitReducer,
    toggleForm: toggleReducer
})
let store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));
store.subscribe(() => store.getState());

// store.dispatch({type: 'TOGGLE'})
//
// store.dispatch({type: 'ADD_ITEM', item: 'ABC'})
//
// store.dispatch({
//     type: 'REMOVE_ITEM',
//     index: 1
// })
export default store;