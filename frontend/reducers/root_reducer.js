// Used to combine multiple reducers 
import { combineReducers } from 'redux';
import todosReducer from './todos_reducer';

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;