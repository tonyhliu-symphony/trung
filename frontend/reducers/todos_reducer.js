import {
  RECEIVE_TODOS,
  RECEIVE_TODO,
  UPDATE_TODO,
  DELETE_TODO
} from '../actions/todo_actions';
import merge from 'lodash/merge';

const testingState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    completed: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    completed: true
  }
};

const todosReducer = (state = testingState, action) => {
  let newState, newTodo;

  switch (action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(todo => newState[todo.id] = todo);
      return newState;
    case RECEIVE_TODO:
      newTodo = {[action.todo.id]: action.todo};
      console.log(merge({}, state, newTodo));
      return merge({}, state, newTodo);
    case DELETE_TODO:
      newState = merge({}, state);
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
}

export default todosReducer;