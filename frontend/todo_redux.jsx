import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import allTodos from './reducers/selectors';
// import { 
//   receiveTodo,
//   receiveTodos
// } from './actions/todo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore;
  window.store = store;
  // window.allTodos = allTodos;
  // window.receiveTodo = receiveTodo
  // window.receiveTodos = receiveTodos
  
  ReactDOM.render(<Root />, root);
});

// const newTodos = [
//   { id: 1, title: "testing1" },
//   { id: 2, title: "testing2" }
// ]
