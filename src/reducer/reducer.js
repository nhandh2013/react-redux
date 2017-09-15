import { combineReducers  } from 'redux';
import fruit from './fruit';
import toggle from './toggle';

let reducer = combineReducers({
    fruit,
    toggle
})

export default reducer;